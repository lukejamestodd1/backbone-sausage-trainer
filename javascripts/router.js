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
		var activity = new Activity({id: 11});
		activity.fetch().done(function(){
			//make a view showing the activity
			var activityView = new ActivityDetailView({model: activity});
			$('.activity-detail').append(activityView.render().el);
		});
		
	},

	showSingleActivity: function(){

		//hide previous page
		console.log('HELLO');
		//find the activity
		var activity = new Activity({id: 1});
		activity.fetch();

		//make a view showing the activity
		var activityView = new ActivityDetailView({model: activity})
		$('.activity-detail').append(view.render().el);
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