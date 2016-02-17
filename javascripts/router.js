var app = {}

var Router = Backbone.Router.extend({
	routes: {
		"": "showIndex",
		"show/": "showSingleActivity"
		// "dash/": "showDash",
		

		// "users/": "showUsers",
		// "activities/": "showActivities",

		// "login/": "showLogin",
		// "sign_up/": "showSignUp",
		
		
		// "users/:id" : "showUser",
		// "users/new": "newUser",
		// "activities/new": "newActivity",		
		// "venues": "showVenues",
		// "venues/:id": "showVenue"
		
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
		var activity = new Activity({id: 11});
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
					});
				});
			});
		});

		



		//var participants = new Participants({activity_id: activity[:id]});
	},

	showSingleActivity: function(){
		console.log('HELLO');
		var activity = new Activity({id: 12});
		activity.fetch().done(function(){
	
			var activityView = new ActivityDetailView({model: activity})
			$('.activity-detail').append(view.render().el);
		});
	}
	
	// showDash: function(){

	// 	//hide the previous page

	// 	//find the right user from API
	// 	var user = new User({ id: id});
	// 	user.fetch();

	// 	//find classes that belong to same user id
	// 	var activities = new Activities //(filter by user ID)

	// 	//create a view to show username, photo, activites
	// 	var userDashView = new UserDashView({ model: user});

	// 	//append to container on dash.html
	// 	$('#si').append(view.render().el);
	// },

	

	
});