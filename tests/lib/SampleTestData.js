// Copyright (C) Nik Silver 2010.
// See licence.txt for terms and conditions not explicitly stated elsewhere.

SampleTestData = {
	
	ajax_hello_world_response: {
		status: 200,
		responseJSON: {
			"rsp": {
				"stat": "ok",
				"api_key": "1234abcd",
				"format": "json",
				"method": "rtm.test.echo",
				"param1": "Hello",
				"param2": "World"
			}
		}
	},
	
	simple_good_response: {
		status: 200,
		responseJSON: {
			"rsp": {
				"stat": "ok",
				// Other data omitted
			}
		}
	},
	
	big_remote_json: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list":
			 	// Might be an array of list objects, not just a single list object as here
			 	{
	            "id":"2637966",
	            "taskseries":[
	               {
	                  "id":"52954009", // Task 1
	                  "created":"2009-10-22T20:49:48Z",
	                  "modified":"2009-10-22T20:49:48Z",
	                  "name":"O2 - Expect deposit credited",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"75724449",
	                     "due":"2010-01-26T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-10-22T20:49:48Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"46489199", // Task 2
	                  "created":"2009-08-06T08:42:04Z",
	                  "modified":"2009-09-03T13:43:00Z",
	                  "name":"MB - Plans for Richard Pope?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"66459582",
	                     "due":"2010-01-08T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-08-06T08:42:04Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"6",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"55274651", // Task 3
	                  "created":"2009-11-17T10:34:49Z",
	                  "modified":"2009-11-17T10:34:49Z",
	                  "name":"MB, AB - Update on testing companies",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"0",
	                     "$t":"FREQ=WEEKLY;INTERVAL=2"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"79139889",
	                     "due":"2009-12-01T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-17T10:34:49Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54732974", // Task 4
	                  "created":"2009-11-11T14:51:28Z",
	                  "modified":"2009-11-11T14:51:28Z",
	                  "name":"MH - At furneral",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78338880",
	                     "due":"2009-11-30T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-11T14:51:28Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54961818", // Task 5
	                  "created":"2009-11-13T16:37:31Z",
	                  "modified":"2009-11-13T16:37:31Z",
	                  "name":"Roy D'Souza - Progress on DC's remote access?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78667188",
	                     "due":"2009-11-25T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T16:37:31Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"30123455", // Task 6
	                  "created":"2009-01-06T17:32:51Z",
	                  "modified":"2009-11-18T10:16:41Z",
	                  "name":"PIM - Write up minutes",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"79230748",
	                     "due":"2009-11-25T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-18T00:00:48Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54750411", // Task 7
	                  "created":"2009-11-11T18:02:25Z",
	                  "modified":"2009-11-11T18:02:25Z",
	                  "name":"Test companies - reject",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78364799",
	                     "due":"2009-11-23T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-11T18:02:25Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"46761347", // Task 8
	                  "created":"2009-08-10T14:37:54Z",
	                  "modified":"2009-11-16T10:29:52Z",
	                  "name":"Legal - Check updatedoc",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1;BYDAY=MO"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78909702",
	                     "due":"2009-11-23T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-16T00:01:32Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54961430", // Task 9
	                  "created":"2009-11-13T16:33:34Z",
	                  "modified":"2009-11-18T16:56:07Z",
	                  "name":"Team - speak to!",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78666784",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T16:33:34Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"2",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"38212211", // Task 10
	                  "created":"2009-04-15T10:27:42Z",
	                  "modified":"2009-11-13T10:36:34Z",
	                  "name":"Stand-up - Anno unce team catch-up",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78568998",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T00:01:38Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"32135089", // Task 11
	                  "created":"2009-01-29T08:16:01Z",
	                  "modified":"2009-11-18T16:58:19Z",
	                  "name":"Misc notes - Update",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"79230749",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-18T00:00:48Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"1",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"41932927", // Task 12
	                  "created":"2009-06-03T14:21:01Z",
	                  "modified":"2009-11-18T16:53:56Z",
	                  "name":"Micro-apps - Track",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"59675483",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-06-03T14:21:01Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"48560123", // Task 13
	                  "created":"2009-09-02T10:55:14Z",
	                  "modified":"2009-11-18T10:37:18Z",
	                  "name":"MH - Roadmap measurements report?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"69463342",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-09-02T10:55:14Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"5",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"27451945", // Task 14
	                  "created":"2008-11-30T20:32:34Z",
	                  "modified":"2009-11-12T17:38:52Z",
	                  "name":"MB - Report for CDs' meeting",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1;BYDAY=FR"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78531435",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-12T17:38:52Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"51963692", // Task 15
	                  "created":"2009-10-12T10:55:46Z",
	                  "modified":"2009-11-06T16:22:08Z",
	                  "name":"HI - WorldPay ownership?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"74322972",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-10-12T10:55:46Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54965930", // Task 16
	                  "created":"2009-11-13T17:29:39Z",
	                  "modified":"2009-11-18T16:55:27Z",
	                  "name":"Gumtree - Prepare presentation",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78671852",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T17:29:39Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"2",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"54937892", // Task 17
	                  "created":"2009-11-13T11:20:49Z",
	                  "modified":"2009-11-18T16:54:59Z",
	                  "name":"GB - Plan and progress on micro-app envs?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78631928",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T11:20:49Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"27451972", // Task 18
	                  "created":"2008-11-30T20:33:00Z",
	                  "modified":"2009-11-13T10:51:11Z",
	                  "name":"Data - back up",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1;BYDAY=FR"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"78568996",
	                     "due":"2009-11-20T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-11-13T00:01:38Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               }
	            ]
	         }
	      }
	   }
	}, // big_remote_json

	remote_json_with_two_lists: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list": [{
			 	"id": "11122940",
				"taskseries": {
					"id": "55630580",
					"created": "2009-11-20T21:11:26Z",
					"modified": "2009-11-20T21:11:26Z",
					"name": "NS - test the list number 1",
					"source": "js",
					"url": "",
					"location_id": "",
					"tags": [],
					"participants": [],
					"notes": [],
					"task": {
						"id": "79648346",
						"due": "",
						"has_due_time": "0",
						"added": "2009-11-20T21:11:26Z",
						"completed": "",
						"deleted": "",
						"priority": "N",
						"postponed": "0",
						"estimate": ""
					}
				}},
			 	{
	            "id":"2637966",
	            "taskseries":[
	               {
	                  "id":"52954009",
	                  "created":"2009-10-22T20:49:48Z",
	                  "modified":"2009-10-22T20:49:48Z",
	                  "name":"O2 - Expect deposit credited",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"75724449",
	                     "due":"2010-01-26T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-10-22T20:49:48Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"46489199",
	                  "created":"2009-08-06T08:42:04Z",
	                  "modified":"2009-09-03T13:43:00Z",
	                  "name":"MB - Plans for Richard Pope?",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"66459582",
	                     "due":"2010-01-08T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-08-06T08:42:04Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"6",
	                     "estimate":""
	                  }
           		   } // Close taskseries
              	] // Close array of taskseries
           	 } // Close that list
          ] // Close all lists
       } // Close tasks object
    } // Close rsp
  }, // remote_json_with_two_lists

	remote_json_with_overdue_tasks: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list": [{
			 	"id": "11122940",
				"taskseries": {
					"id": "55630580",
					"created": "2009-11-20T21:11:26Z",
					"modified": "2009-11-20T21:11:26Z",
					"name": "Do something with no due date",
					"source": "js",
					"url": "",
					"location_id": "",
					"tags": [],
					"participants": [],
					"notes": [],
					"task": {
						"id": "79648346",
						"due": "",
						"has_due_time": "0",
						"added": "2009-11-20T21:11:26Z",
						"completed": "",
						"deleted": "",
						"priority": "N",
						"postponed": "0",
						"estimate": ""
					}
				}},
			 	{
	            "id":"2637966",
	            "taskseries":[
	               {
	                  "id":"52954009",
	                  "created":"2009-10-22T20:49:48Z",
	                  "modified":"2009-10-22T20:49:48Z",
	                  "name":"Do something that's overdue",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"75724449",
	                     "due":"2008-01-26T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-10-22T20:49:48Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"0",
	                     "estimate":""
	                  }
	               },
	               {
	                  "id":"12345678",
	                  "created":"2009-08-06T08:42:04Z",
	                  "modified":"2009-09-03T13:43:00Z",
	                  "name":"Do something today",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"11223344",
	                     "due":"2009-12-01T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-08-06T08:42:04Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"6",
	                     "estimate":""
	                  }
           		   },
	               {
	                  "id":"46489199",
	                  "created":"2009-08-06T08:42:04Z",
	                  "modified":"2009-09-03T13:43:00Z",
	                  "name":"Do something in the future",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":{
	                     "id":"66459582",
	                     "due":"2010-01-08T00:00:00Z",
	                     "has_due_time":"0",
	                     "added":"2009-08-06T08:42:04Z",
	                     "completed":"",
	                     "deleted":"",
	                     "priority":"N",
	                     "postponed":"6",
	                     "estimate":""
	                  }
           		   } // Close taskseries
              	] // Close array of taskseries
           	 } // Close that list
          ] // Close all lists
       } // Close tasks object
    } // Close rsp
  }, // remote_json_with_overdue_tasks
  
  last_sync_response: {
   "rsp":{
      "stat":"ok",
      "tasks":{
         "list":{
            "id":"11122940",
            "current":"2009-12-19T23:45:24Z",
            "taskseries":[
               {
                  "id":"58274353", // Task 1
                  "created":"2009-12-19T23:48:11Z",
                  "modified":"2009-12-19T23:48:11Z",
                  "name":"Sixth task",
                  "source":"js",
                  "url":"",
                  "location_id":"",
                  "tags":[

                  ],
                  "participants":[

                  ],
                  "notes":[

                  ],
                  "task":{
                     "id":"83601522",
                     "due":"",
                     "has_due_time":"0",
                     "added":"2009-12-19T23:48:11Z",
                     "completed":"",
                     "deleted":"",
                     "priority":"N",
                     "postponed":"0",
                     "estimate":""
                  }
               }, // taskseries 58274353
               {
                  "id":"58274350", // Task 2
                  "created":"2009-12-19T23:48:07Z",
                  "modified":"2009-12-19T23:48:07Z",
                  "name":"Fifth task",
                  "source":"js",
                  "url":"",
                  "location_id":"",
                  "tags":[

                  ],
                  "participants":[

                  ],
                  "notes":[

                  ],
                  "task":{
                     "id":"83601519",
                     "due":"",
                     "has_due_time":"0",
                     "added":"2009-12-19T23:48:07Z",
                     "completed":"",
                     "deleted":"",
                     "priority":"N",
                     "postponed":"0",
                     "estimate":""
                  }
               } // taskseries 58274350
            ], // Array of taskseries
            "deleted":{
               "taskseries":[
                  {
                     "id":"58274252", // Task 3, deleted
                     "task":{
                        "id":"83601413",
                        "deleted":"2009-12-19T23:48:18Z"
                     }
                  },
                  {
                     "id":"58274238", // Task 4, deleted
                     "task":{
                        "id":"83601399",
                        "deleted":"2009-12-19T23:48:14Z"
                     }
                  }
               ] // Array of deleted taskseries
            } // deleted
         } // list 11122940
      } // tasks
   } // rsp
  },// last_sync_response

  last_sync_response_with_just_one_deletion: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list":{
	            "id":"11122940",
	            "deleted":{
	               "taskseries":{
	                  "id":"58274350",
	                  "task":{
	                     "id":"83601519",
	                     "deleted":"2009-12-20T22:21:19Z"
	                  }
	               }
	            }
	         }
	      }
	   }
	}, // last_sync_response_with_just_one_deletion

  last_sync_response_deleting_task_5: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list":{
	            "id":"2637966",
	            "deleted":{
	               "taskseries":{
	                  "id":"54961818",
	                  "task":{
	                     "id":"78667188",
	                     "deleted":"2009-12-20T22:21:19Z"
	                  }
	               }
	            }
	         }
	      }
	   }
	}, // last_sync_response_deleting_task_5

	taskseries_obj_with_multiple_tasks: {
	   "id":"58500785",
	   "created":"2009-12-22T17:05:52Z",
	   "modified":"2009-12-23T12:28:06Z",
	   "name":"(i)DSG report - Plan\/send",
	   "source":"js",
	   "url":"",
	   "location_id":"",
	   "rrule":{
	      "every":"1",
	      "$t":"FREQ=MONTHLY;INTERVAL=1;BYDAY=1MO"
	   },
	   "tags":[],
	   "participants":[],
	   "notes":[],
	   "task":[
	      {
	         "id":"83992704",
	         "due":"2010-01-04T00:00:00Z",
	         "has_due_time":"0",
	         "added":"2009-12-23T00:01:32Z",
	         "completed":"",
	         "deleted":"",
	         "priority":"N",
	         "postponed":"0",
	         "estimate":""
	      },
	      {
	         "id":"83954367",
	         "due":"2009-12-24T00:00:00Z",
	         "has_due_time":"0",
	         "added":"2009-12-22T17:05:52Z",
	         "completed":"",
	         "deleted":"",
	         "priority":"N",
	         "postponed":"1",
	         "estimate":""
	      }
	   ] // task array
	}, // taskseries_obj_with_postponed_recurring_tasks
	
	taskseries_obj_with_multiple_and_recurring_deletions: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list":[
	            {
	               "id":"11122940",
	               "current":"2009-12-30T00:00:48Z",
	               "taskseries":[
	                  {
	                     "id":"59027737",
	                     "created":"2009-12-30T15:27:41Z",
	                     "modified":"2009-12-30T15:27:41Z",
	                     "name":"Delete me 5",
	                     "source":"js",
	                     "url":"",
	                     "location_id":"",
	                     "tags":[
	
	                     ],
	                     "participants":[
	
	                     ],
	                     "notes":[
	
	                     ],
	                     "task":{
	                        "id":"84833374", // Task 1, list id 11122940
	                        "due":"",
	                        "has_due_time":"0",
	                        "added":"2009-12-30T15:27:41Z",
	                        "completed":"",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     }
	                  },
	                  {
	                     "id":"59027732",
	                     "created":"2009-12-30T15:27:38Z",
	                     "modified":"2009-12-30T15:27:38Z",
	                     "name":"Delete me 4",
	                     "source":"js",
	                     "url":"",
	                     "location_id":"",
	                     "tags":[
	
	                     ],
	                     "participants":[
	
	                     ],
	                     "notes":[
	
	                     ],
	                     "task":{
	                        "id":"84833369", // Task 2, list id 11122940
	                        "due":"",
	                        "has_due_time":"0",
	                        "added":"2009-12-30T15:27:38Z",
	                        "completed":"",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     }
	                  }
	               ],
	               "deleted":{
	                  "taskseries":[
	                     {
	                        "id":"59026338",
	                        "task":{
	                           "id":"84830904", // Task 3, deleted, list id 11122940
	                           "deleted":"2009-12-30T15:27:00Z"
	                        }
	                     },
	                     {
	                        "id":"59026332",
	                        "task":{
	                           "id":"84830799", // Task 4, deleted, list id 11122940
	                           "deleted":"2009-12-30T15:26:56Z"
	                        }
	                     },
	                     {
	                        "id":"58975725",
	                        "task":{
	                           "id":"84743603", // Task 5, deleted, list id 11122940
	                           "deleted":"2009-12-30T14:45:28Z"
	                        }
	                     },
	                     {
	                        "id":"58975720",
	                        "task":{
	                           "id":"84743598", // Task 6, deleted, list id 11122940
	                           "deleted":"2009-12-30T14:56:40Z"
	                        }
	                     } // taskseries 59026338
	                  ] // Array of taskseries in list id 11122940
	               } // deleted object in list id 11122940
	            }, // task list object, list id 11122940
	            {
	               "id":"2637966",
	               "current":"2009-12-30T00:00:48Z",
	               "taskseries":{
	                  "id":"32135089",
	                  "created":"2009-01-29T08:16:01Z",
	                  "modified":"2009-12-30T00:00:48Z",
	                  "name":"Misc notes - Update",
	                  "source":"js",
	                  "url":"",
	                  "location_id":"",
	                  "rrule":{
	                     "every":"1",
	                     "$t":"FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR"
	                  },
	                  "tags":[
	
	                  ],
	                  "participants":[
	
	                  ],
	                  "notes":[
	
	                  ],
	                  "task":[
	                     {
	                        "id":"84757747", // Task 7, list id 2637966, taskseries id 32135089
	                        "due":"2009-12-31T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-12-30T00:00:48Z",
	                        "completed":"",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"84630592", // Task 8, list id 2637966, taskseries id 32135089
	                        "due":"2009-12-30T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-12-29T00:01:30Z",
	                        "completed":"",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"62349079", // Task 9, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-07-01T23:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-06-29T23:30:11Z",
	                        "completed":"",
	                        "deleted":"2009-07-01T17:22:21Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"59484931", // Task 10, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-06-03T23:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-06-01T23:09:45Z",
	                        "completed":"",
	                        "deleted":"2009-06-03T15:15:01Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"58325949", // Task 11, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-05-25T23:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-05-20T23:53:40Z",
	                        "completed":"",
	                        "deleted":"2009-05-26T08:30:59Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"56324020", // Task 12, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-05-04T23:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-05-04T00:09:07Z",
	                        "completed":"",
	                        "deleted":"2009-05-05T08:26:02Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"51791665", // Task 13, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-03-27T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-03-25T18:35:09Z",
	                        "completed":"",
	                        "deleted":"2009-03-26T13:15:26Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"51559643", // Task 14, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-03-25T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-03-24T00:37:19Z",
	                        "completed":"",
	                        "deleted":"2009-03-24T09:57:46Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"50769130", // Task 15, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-03-18T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-03-17T00:31:12Z",
	                        "completed":"",
	                        "deleted":"2009-03-17T10:40:54Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"49810071",
	                        "due":"2009-03-11T00:00:00Z", // Task 16, deleted, list id 2637966, taskseries id 32135089
	                        "has_due_time":"0",
	                        "added":"2009-03-09T00:41:22Z",
	                        "completed":"",
	                        "deleted":"2009-03-10T18:28:01Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"49396549", // Task 17, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-03-09T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-03-05T00:33:47Z",
	                        "completed":"",
	                        "deleted":"2009-03-06T17:32:29Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"48551105", // Task 18, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-03-02T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-02-26T00:27:00Z",
	                        "completed":"",
	                        "deleted":"2009-02-27T17:23:43Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"48293847", // Task 19, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-02-26T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-02-24T00:20:57Z",
	                        "completed":"",
	                        "deleted":"2009-02-25T18:48:10Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"48152058", // Task 20, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-02-25T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-02-23T00:29:45Z",
	                        "completed":"",
	                        "deleted":"2009-02-25T08:49:23Z",
	                        "priority":"N",
	                        "postponed":"1",
	                        "estimate":""
	                     },
	                     {
	                        "id":"46937911", // Task 21, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-02-13T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-02-12T00:12:15Z",
	                        "completed":"",
	                        "deleted":"2009-02-13T13:11:00Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     },
	                     {
	                        "id":"46243142", // Task 22, deleted, list id 2637966, taskseries id 32135089
	                        "due":"2009-02-09T00:00:00Z",
	                        "has_due_time":"0",
	                        "added":"2009-02-06T00:19:14Z",
	                        "completed":"",
	                        "deleted":"2009-02-06T18:00:05Z",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     }
	                  ] // Array of tasks in taskseries 32135089
	               } // taskseries object id 32135089
	            } // task list object id 2637966
	         ] // Array of task lists
	      } // The tasks object
	   } // The rsp object
	}, // taskseries_obj_with_multiple_and_recurring_deletions
	
	response_from_add_task: {
		status: 200,
		responseJSON: {
			"rsp": {
				"stat": "ok",
				"transaction": {
					"id": "1444866919",
					"undoable": "0"
				},
				"list": {
					"id": "2637966",
					"taskseries": {
						"id": "59222465",
						"created": "2010-01-02T22:02:49Z",
						"modified": "2010-01-02T22:02:49Z",
						"name": "Local task 2",
						"source": "api",
						"url": "",
						"location_id": "",
						"tags": [],
						"participants": [],
						"notes": [],
						"task": {
							"id": "85191014",
							"due": "",
							"has_due_time": "0",
							"added": "2010-01-02T22:02:49Z",
							"completed": "",
							"deleted": "",
							"priority": "N",
							"postponed": "0",
							"estimate": ""
						} // task object
					} // taskseries object
				} // list object
			} // rsp
		} // responseJSON
	}, // response_from_add_task

	response_with_basic_and_recurring_completion: {
	   "rsp":{
	      "stat":"ok",
	      "tasks":{
	         "list":[
	            {
	               "id":"2637970",
	               "current":"2010-01-03T14:47:27Z"
	            },
	            {
	               "id":"11122940",
	               "current":"2010-01-03T14:47:27Z",
	               "taskseries":[
	                  {
	                     "id":"59269714",
	                     "created":"2010-01-03T14:47:27Z",
	                     "modified":"2010-01-03T14:47:27Z",
	                     "name":"Some test task",
	                     "source":"js",
	                     "url":"",
	                     "location_id":"",
	                     "tags":[],
	                     "participants":[],
	                     "notes":[],
	                     "task":{
	                        "id":"85269951", // Task 1
	                        "due":"",
	                        "has_due_time":"0",
	                        "added":"2010-01-03T14:47:27Z",
	                        "completed":"",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     }
	                  },
	                  {
	                     "id":"59269674",
	                     "created":"2010-01-03T14:46:55Z",
	                     "modified":"2010-01-03T14:48:22Z",
	                     "name":"Simple task to be completed",
	                     "source":"js",
	                     "url":"",
	                     "location_id":"",
	                     "tags":[],
	                     "participants":[],
	                     "notes":[],
	                     "task":{
	                        "id":"85269908", // Task 2
	                        "due":"",
	                        "has_due_time":"0",
	                        "added":"2010-01-03T14:46:55Z",
	                        "completed":"2010-01-03T14:48:22Z",
	                        "deleted":"",
	                        "priority":"N",
	                        "postponed":"0",
	                        "estimate":""
	                     }
	                  },
	                  {
	                     "id":"59269686",
	                     "created":"2010-01-03T14:47:03Z",
	                     "modified":"2010-01-03T14:48:11Z",
	                     "name":"Recurring task to be completed",
	                     "source":"js",
	                     "url":"",
	                     "location_id":"",
	                     "rrule":{
	                        "every":"1",
	                        "$t":"FREQ=DAILY;INTERVAL=1"
	                     },
	                     "tags":[],
	                     "participants":[],
	                     "notes":[],
	                     "task":[
	                        {
	                           "id":"85269921", // Task 3
	                           "due":"",
	                           "has_due_time":"0",
	                           "added":"2010-01-03T14:47:03Z",
	                           "completed":"2010-01-03T14:48:11Z",
	                           "deleted":"",
	                           "priority":"N",
	                           "postponed":"0",
	                           "estimate":""
	                        },
	                        {
	                           "id":"85270009", // Task 4
	                           "due":"2010-01-04T00:00:00Z",
	                           "has_due_time":"0",
	                           "added":"2010-01-03T14:48:11Z",
	                           "completed":"",
	                           "deleted":"",
	                           "priority":"N",
	                           "postponed":"0",
	                           "estimate":""
	                        }
	                     ] // array of tasks in taskseries ID 59269686
	                  } // taskseries ID 59269686
	               ] // array of taskseries in list ID 11122940
	            }, // an element in the list array
	            {
	               "id":"2637966",
	               "current":"2010-01-03T14:47:27Z"
	            } // an element in the list array
	         ] // list array
	      } // tasks
	   } // rsp
	} // response_with_basic_and_recurring_completion

}		
