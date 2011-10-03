// Copyright (C) Nik Silver 2010.
// See licence.txt for terms and conditions not explicitly stated elsewhere.

function TaskListAssistant(config) {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
	  
	Mojo.Log.info("TaskListAssistant: Entering constructor");
	this.config = config;
	this.rtm = config.rtm;
	this.taskListModel = config.taskListModel;
	this.listListModel = config.listListModel;
	this.selectedList = undefined;
	this.taskListWidgetModel = { items: [] }; // Initial value, before task list loaded
	this.initialiseStoreAndLoadTaskList();
	this.rtm.retrier.onTaskListModelChange = this.onTaskListModelChange.bind(this);
	
	this.appMenuAttributes = {
		omitDefaultItems: true
	};
	this.appMenuModel = {
		visible: true,
		items: [
			Mojo.Menu.editItem,
			{ label: "Sync now", command: 'do-sync', disabled: !this.rtm.getToken() },
			{ label: "Authorise...", command: 'do-authorise' },
			{ label: "Deauthorise", command: 'do-deauthorise', disabled: !this.rtm.getToken() },
			//{ label: "Last Error", command: 'do-last-error' },
			{ label: "Help", command: 'do-help' },
		]
	};
	this.setUpAppMenuItemListeners();
	this.rtm.recurrenceChanged = this.onTaskListModelChange.bind(this);
	
	this.commandMenuModel = {
		visible: true,
		items: [
			{ label: 'Add', command: 'do-add' }
		]
	}
}

TaskListAssistant.prototype.initialiseStoreAndLoadTaskList = function() {
	Mojo.Log.info("TaskListAssistant.initialiseStoreAndLoadTaskList: Entering");
	var inst = this;
	Store.initialise(function() {
		inst.taskListModel.loadTaskList(inst.onTaskListModelChange.bind(inst));
		inst.listListModel.loadListList();
	});
}

TaskListAssistant.prototype.setUpAppMenuItemListeners = function() {
	var inst = this;
	Mojo.Event.listen(document, 'token-changed', function(event) {
		Mojo.Log.info("TaskListAssistant.setUpAppMenuItemListeners handler: Entering");
		inst.appMenuModel.items[1].disabled = !event.tokenSet; // Sync
		inst.appMenuModel.items[2].disabled = event.tokenSet;  // Authorise
		inst.appMenuModel.items[3].disabled = !event.tokenSet; // Deauthorise
	})
}

TaskListAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed. */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
	
	Mojo.Log.info("TaskListAssistant.setup: Entering");

	// Set up the app menu and command menu
	
	this.controller.setupWidget(Mojo.Menu.appMenu, this.appMenuAttributes, this.appMenuModel);
	this.controller.setupWidget(Mojo.Menu.commandMenu, {}, this.commandMenuModel);

	this.setUpTaskListWidget();
	
	// Header listener
	this.header = this.controller.get('TaskListHeader');
	Mojo.Event.listen(this.header, Mojo.Event.tap, this.handleHeaderTap.bind(this));
}

TaskListAssistant.prototype.handleHeaderTap = function(clickEvent) {
	Mojo.Log.info("TaskListAssistant.handleHeaderTap: Entering");
	var list_list = this.listListModel.getRegularListList();
	var menu_items = [];
	list_list.each(function(list) {
		menu_items.push({
			label: list.name,
			command: list.listID
		})
	});
	this.controller.popupSubmenu({
		  onChoose: this.popupChoose,
		  placeNear: clickEvent.target,
		  items: menu_items
		});
	
}

TaskListAssistant.prototype.popupChoose = function(listID) {
	Mojo.Log.info("TaskListAssistant.popupChoose: Entering with cmd: " + listID);
	this.selectedList = this.listListModel.getListByListID(listID);
	this.onTaskListModelChange();
}

TaskListAssistant.prototype.setUpTaskListWidget = function(){
	Mojo.Log.info("TaskListAssistant.setUpTaskListWidget: Entering");
	var listInfo = {
		attributes: {
			itemTemplate: "TaskList/TaskList-item",
			listTemplate: "TaskList/TaskList-container"
		},
		model: this.taskListWidgetModel,
		elementId: "TaskList",
		event: Mojo.Event.listTap,
		handler: this.handleListTap
	};
	this.controller.setupWidget(listInfo.elementId, listInfo.attributes, listInfo.model);
	Mojo.Event.listen(this.controller.get(listInfo.elementId), Mojo.Event.listTap, this.handleListTap.bind(this));
}

TaskListAssistant.prototype.handleListTap = function(event) {
	Mojo.Log.info("TaskListAssistant.handleListTap: Entering");
	Mojo.Log.info("TaskListAssistant.handleListTap: event name is '" + event.item.name + "'");
	var task_config = {
		rtm: this.rtm,
		taskListModel: this.taskListModel,
		task: event.item,
		isNew: false
	};
	Mojo.Controller.stageController.pushScene('EditTask', task_config);
}

TaskListAssistant.prototype.handleCommand = function(event) {
	Mojo.Log.info("TaskListAssistant.handleCommand: Entering");
	if (event.type == Mojo.Event.command) {
		Mojo.Log.info("TaskListAssistant.handleCommand: Event command is '" + event.command + "'");
		switch (event.command) {
			case 'do-authorise':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-authorise");
				Mojo.Controller.stageController.pushScene('Auth', this.config);
				break;
			case 'do-deauthorise':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-deauthorise");
				this.rtm.deleteToken();
				break;
			case 'do-sync':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-sync");
				this.rtm.resetPullEventSpacer();
				this.rtm.fireNextEvent();
				break;
			case 'do-last-error':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-last-error");
				Mojo.Controller.stageController.pushScene('LastError', this.config);
				break;
			case 'do-help':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-help");
				this.handleHelpCommand();
				break;
			case 'do-add':
				Mojo.Log.info("TaskListAssistant.handleCommand: Case do-add");
				this.handleAddTaskCommand();
				break;
			default:
				Mojo.Log.info("TaskListAssistant.handleCommand: Unrecognised event command");
				break;
		}
	}
}

TaskListAssistant.prototype.handleHelpCommand = function() {
	this.controller.serviceRequest("palm://com.palm.applicationManager", {
		method: "open",
		parameters: {
			  id: 'com.palm.app.browser',
			  params: { target: 'http://niksilver.com/cloud-tasks' }
		}
	});
}

TaskListAssistant.prototype.handleAddTaskCommand = function() {
	Mojo.Log.info("TaskListAssistant.handleAddTaskCommnad: Entering with selectd list " + this.selectedList.name);
	var task = new TaskModel({
		name: '',
		due: '',
		listID: this.selectedList.listID,
		localChanges: ['name']
	});
	var task_config = {
		rtm: this.rtm,
		taskListModel: this.taskListModel,
		task: task,
		isNew: true
	};
	Mojo.Controller.stageController.pushScene('EditTask', task_config);
}

TaskListAssistant.prototype.onTaskListModelChange = function() {
	Mojo.Log.info("TaskListAssistant.onTaskListModelChange: Entering");
	if (!this.controller) {
		Mojo.Log.info("TaskListAssistant.onTaskListModelChange: Controller not set, exiting");
	}
	Mojo.Log.info("TaskListAssistant.onTaskListModelChange: Acting on change");
	if (!this.selectedList) {
		var list = Utils.defaultListCookie().get();
		if (list) {
			this.selectedList = list;
		}
	}
	
	if (this.selectedList) {
		this.taskListWidgetModel.items = this.taskListModel.getListOfVisibleTasksByListID(this.selectedList.listID);
		this.header.update(this.selectedList.name);
	} else {
		this.taskListWidgetModel.items = this.taskListModel.getListOfVisibleTasks();
	}
	this.controller.modelChanged(this.taskListWidgetModel);
	this.hideOrDisplayAuthInstructions();
}

/**
 * 
 * @param {Object} returnValue  An object with parameters:
 *     - lastScene (is 'EditTask' or 'Auth')
 *     - task
 *     - isNew (boolean)
 *     - wasCancelled (boolean)
 */
TaskListAssistant.prototype.activate = function(returnValue) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
	
	Mojo.Log.info("TaskListAssistant.activate: Entering");
	
	// Add in a new task if we've got one with a proper name
	if (returnValue
			&& returnValue.isNew
			&& !returnValue.wasCancelled
			&& returnValue.task.name != '') {
		this.addNewTask(returnValue.task);
	}
	
	this.hideOrDisplayAuthInstructions();

	Mojo.Log.info("TaskListAssistant.activate: Firing next event...");
	// This may push local changes, or do what's needed before that.

	this.rtm.fireNextEvent();

	if (!this.networkIndicator) {
		// This setup has to go in the activate() method because it's only here
		// that the document is set up, which is required.
		this.setUpNetworkIndicator();
	}
	this.updateNetworkIndicator();

	if (!returnValue) {
		Mojo.Log.info("TaskListAssistant.activate: Exiting (no scene return value)");
		return;
	}
	
	if (returnValue.lastScene == 'EditTask') {
		this.handleReturnFromEditTaskScene(returnValue);
	}
	else if (returnValue.lastScene == 'Auth') {
		Mojo.Log.info("TaskListAssistant.activate: Returning from Auth");
		this.rtm.fireNextEvent();
	}
	Mojo.Log.info("TaskListAssistant.activate: Exiting");
}

TaskListAssistant.prototype.handleReturnFromEditTaskScene = function(returnValue) {
	Mojo.Log.info("TaskListAssistant.handleReturnFromEditTaskScene: Entering");
	var task = returnValue.task;
	if (!task) {
		return;
	}
	if (!task.name) {
		return;
	}
	if (!task.hasLocalChanges()) {
		return;
	}

	Mojo.Log.info("TaskListAssistant.handleReturnFromEditTaskScene: Task changed");
	if (task.hasLocalChangeOf('name') || task.hasLocalChangeOf('due')) {
		this.taskListModel.sort();
	}
	this.onTaskListModelChange();
	
	tasks_marked_for_deletion = returnValue.tasksMarkedForDeletion;
	if (tasks_marked_for_deletion) {
		Mojo.Log.info("TaskListAssistant.handleReturnFromEditTaskScene: Saving tasks marked for deletion");
		tasks_marked_for_deletion.each(function(task) {
			Store.saveTask(task);
		})
	}
	else {
		Mojo.Log.info("TaskListAssistant.handleReturnFromEditTaskScene: Saving changed tasks");
		Store.saveTask(task);
	}
}

TaskListAssistant.prototype.setUpNetworkIndicator = function(){
	Mojo.Log.info("TaskListAssistant.setUpNetworkIndicator: Entering");
	this.networkIndicator = new NetworkIndicator(this.rtm, this.controller);
	this.rtm.addOnNetworkRequestsChangeListener(
		this.networkIndicator.onNetworkRequestsChange.bind(this.networkIndicator)
	);
}

TaskListAssistant.prototype.updateNetworkIndicator = function() {
	Mojo.Log.info("TaskListAssistant.updateNetworkIndicator: Entering");
	this.networkIndicator.onNetworkRequestsChange(undefined, this.rtm.networkRequests());
}

TaskListAssistant.prototype.addNewTask = function(task) {
	Mojo.Log.info("TaskListAssistant.addNewTask: Entering with task " + task);
	this.taskListModel.addTask(task);
	this.taskListModel.sort();
	Store.saveTask(task);
}

TaskListAssistant.prototype.hideOrDisplayAuthInstructions = function() {
	Mojo.Log.info("TaskListAssistant.hideOrDisplayAuthInstructions: Entering");

	var num_tasks = this.taskListModel.getTaskList().length;
	var is_authorised = this.rtm.getToken();
	var need_instructions = (num_tasks == 0 && !is_authorised);
	this.controller.get('AuthInstructions').setStyle({
		display: (need_instructions ? 'block' : 'none')
	});
}

TaskListAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

TaskListAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}
