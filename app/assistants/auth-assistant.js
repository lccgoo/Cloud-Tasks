function AuthAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
	  
	  this.rtm = new RTM();
}

AuthAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed. */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
	
	Mojo.Log.info("AuthAssistant.setup: Entering");
		
	this.controller.setupWidget('auth-go', {}, { buttonLabel: 'Go' });
	this.controller.listen('auth-go', Mojo.Event.tap, this.handleGoTap.bind(this));
	this.controller.listen('auth-finish', Mojo.Event.tap, this.handleFinishTap.bind(this));
}

AuthAssistant.prototype.handleGoTap = function(event){
	Mojo.Log.info("AuthAssistant.handleGoTap: Entering");
	var auth_assistant = this;
	this.rtm.getFrob(
		function(frob){
			Mojo.Log.info("AuthAssistant.handleGoTap: Got frob");
			var auth_url = auth_assistant.rtm.getAuthURL(frob);
			auth_assistant.makeAuthRequest(auth_url);
		}, function(err_msg){
			Mojo.Log.info("AuthAssistant.handleGoTap: " + err_msg);
			// HANDLE ERROR MESSAGE
		}
	);
}

AuthAssistant.prototype.makeAuthRequest = function(auth_url) {
	Mojo.Log.info("AuthAssistant.makeAuthRequest: Entering with auth_url " + auth_url);
	this.controller.serviceRequest("palm://com.palm.applicationManager", {
		method: "open",
		parameters: {
			  id: 'com.palm.app.browser',
			  params: {
			      target: auth_url
			  }
		}
	});
}

AuthAssistant.prototype.handleFinishTap = function(event){
	// TO DO!
};

AuthAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


AuthAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

AuthAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}
