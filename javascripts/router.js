
var sausageTrainerApp = {} //wrap it all in app object when finished


//========== ROUTER ========= //


var Router = Backbone.Router.extend({
	
	routes: {
		"": "showIndex",
		"session/new": "login",
		"user/new": "signUp",

		"trainer/dash": "trainerDash", 
		"trainer/activities": "trainerActivitesList", 
		"trainer/activities/:id": "trainerActivityDetails",
		"trainer/activities/new": "trainerActivityCreate",
		"trainer/activities/edit": "trainerActivityEdit", 
		"trainer/contacts": "trainerContactsList",
		"trainer/contacts/message": "trainerSendMessage",
		"trainer/calendar": "trainerCalendar",

		"student/dash": "studentDash",
		"student/activities": "studentActivitesList", 
		"student/activities/:id": "studentActivityDetails",
		"student/activities/:id/book": "studentActivityBook", 
		"student/contacts": "studentContactsList",
		"student/contacts/:id": "studentTrainerDetail",
		"student/calendar": "studentCalendar"	
	},

	//wrap the index page in a view so can press back
	showIndex: function(){

		//shows all users
		var users = new Users();
		users.fetch().done(function() {
			users.each(function(person) {
				var view = new UserItemView({ model: person});
				$('.users-list').append(view.render().el);
			});
		});

		//shows all activites
		var activities = new Activities();
		activities.fetch().done(function(){
			activities.each(function(instance){
				var view = new ActivityItemView({ model: instance});
				$('.activities-list').append(view.render().el);
			});
		});

		//shows one activity
		// console.log('index page function');
		// var activity = new Activity({id: 11});
		// activity.fetch().done(function(){
		// 	//make a view showing the activity
		// 	var activityView = new ActivityDetailView({model: activity});
		// 	$('.activity-detail').append(activityView.render().el);
		// });

		//show one activity plus trainer info,
		//venue info, participants list
		//change from hard coded when more data exists in DB
		console.log('SHOW PAGE');
		var activity = new Activity({id: 22});
		activity.fetch().done(function(){
			//make a view showing the activity
			var activityView = new ActivityDetailView({model: activity});
			$('.activity-detail').append(activityView.render().el);

			var instructor = new User({id: activity.get('user_id')});
			instructor.fetch().done(function(){
				var instructorView = new UserItemView({model: instructor});
				$('.user-detail').append(instructorView.render().el);

				//need more venue data in DB for this to work
				var venue = new Venue({id: activity.get('venue_id')});
				venue.fetch().done(function(){
					var venueView = new VenueDetailView({model: venue});
					$('.venue-detail').append(venueView.render().el);

					//need more data in DB for this to work
					var activityType = new ActivityType({id: activity.get('activity_type_id')});
					activityType.fetch().done(function(){
						var activityTypeView = new ActivityTypeDetailView({model: activityType});
						$('.activity-type-detail').append(activityTypeView.render().el);

						//shows all participants with this activity id
						var participants = new Participants({activity_id: activity.get('activity_id')});
						participants.fetch().done(function() {
							participants.each(function(attendee) {
								var view = new ParticipantItemView({ model: attendee});
								$('.participants-list').append(view.render().el);
							});
						});
					});
				});
			});
		});
	},

	login: function(){

	},

	signUp: function(){

	},

	trainerDash: function(){

	},

	trainerActivitesList: function(){

	},

	trainerActivityDetails: function(){

	},

	trainerActivityCreate: function(){

	},

	trainerActivityEdit: function(){

	},

	trainerContactsList: function(){

	},

	trainerSendMessage: function(){

	},

	trainerCalendar: function(){

	},

	studentDash: function(){

	},

	studentActivitesList: function(){

	},

	studentActivityDetails: function(){

	},

	studentActivityBook: function(){

	},

	studentContactsList: function(){

	},

	studentTrainerDetail: function(){

	},

	studentCalendar: function(){

	}
		
});

var router = new Router();
Backbone.history.start();







