
//wrap it all in app object when finished
var sausageTrainerApp = {};

// helper function
var setupBody = function() {
  if ($('.navbar').length === 0) {
    console.log('Creating nav bar.');
    // no current nav bar found so append to body
    var navBar = new NavBarView();
    $('body').append(navBar.render().el);
    $('.navbar').attr('role', 'navigation');
  }

  // collect all elements and remove all except nav bar, footer and scripts
  $('body').children().each( function(child) {
    if ($(this).is('script') || $(this).is('nav')) {
    } else {
      $(this).remove();
    }
  });
};


//========== ROUTER ========= //


var Router = Backbone.Router.extend({

	routes: {
		"": "showIndex",
		"login": "login",
		// "user/new": "signUp",
    //
		// "trainer/dash": "trainerDash",
		// "trainer/activities": "trainerActivitiesList",
		// "trainer/activities/:id": "trainerActivityDetails",
		// "trainer/activities/new": "trainerActivityCreate",
		// "trainer/activities/edit": "trainerActivityEdit",
		// "trainer/contacts": "trainerContactsList",
		// "trainer/contacts/message": "trainerSendMessage",
		// "trainer/calendar": "trainerCalendar",
    //
		// "student/dash": "studentDash",
		// "student/activities": "studentActivitiesList",
		// "student/activities/:id": "studentActivityDetails",
		// "student/activities/:id/book": "studentActivityBook",
		// "student/contacts": "studentContactsList",
		// "student/contacts/:id": "studentTrainerDetail",
		// "student/calendar": "studentCalendar"
		// "user/new": "signUp",
    //
		// "trainer/dash": "trainerDash",
		// "trainer/activities": "trainerActivitiesList",
		// "trainer/activities/:id": "trainerActivityDetails",
		// "trainer/activities/new": "trainerActivityCreate",
		// "trainer/activities/edit": "trainerActivityEdit",
		// "trainer/contacts": "trainerContactsList",
		// "trainer/contacts/message": "trainerSendMessage",
		// "trainer/calendar": "trainerCalendar",
    //
		// "student/dash": "studentDash",
		// "student/activities": "studentActivitiesList",
		// "student/activities/:id": "studentActivityDetails",
		// "student/activities/:id/book": "studentActivityBook",
		// "student/contacts": "studentContactsList",
		// "student/contacts/:id": "studentTrainerDetail",
		// "student/calendar": "studentCalendar"
	},

	showIndex: function(){
    console.log('Index route loading...');
    // index page made up of:
    // nav bar
    // welcome/splash screen view
    // footer
    setupBody();

    var splashCarousel = new CarouselView();
    $('body').append(splashCarousel.render().el);
    $('.carousel').carousel({ interval: 5000 });

    var splashMain = new SplashMainView();
    $('body').append(splashMain.render().el);

    var footer = new FooterView();
    $('body').append(footer.render().el);

		// //show student dashboard
		// var studentDash = new StudentDashboard();
		// $('body').append(studentDash.render().el);

		//shows all users
		// var users = new Users();
		// users.fetch().done(function() {
		// 	users.each(function(person) {
		// 		var view = new UserItemView({ model: person});
		// 		$('.users-list').append(view.render().el);
		// 	});
		// });

		//shows all activities
		// //shows all activities
		// var activities = new Activities();
		// activities.fetch().done(function(){
		// 	activities.each(function(instance){
		// 		var view = new ActivityItemView({ model: instance});
		// 		$('.activities-list').append(view.render().el);
		// 	});
		// });
    //
		// //shows one activity
		// // console.log('index page function');
		// // var activity = new Activity({id: 11});
		// // activity.fetch().done(function(){
		// // 	//make a view showing the activity
		// // 	var activityView = new ActivityDetailView({model: activity});
		// // 	$('.activity-detail').append(activityView.render().el);
		// // });
    //
		// //show one activity plus trainer info,
		// //venue info, participants list
		// //change from hard coded when more data exists in DB
		// console.log('SHOW PAGE');
		// var activity = new Activity({id: 22});

		//shows one activity
		// console.log('index page function');
		// var activity = new Activity({id: 11});
		// activity.fetch().done(function(){
		// 	//make a view showing the activity
		// 	var activityView = new ActivityDetailView({model: activity});
		// 	$('.activity-detail').append(activityView.render().el);
    //
		// 	var instructor = new User({id: activity.get('user_id')});
		// 	instructor.fetch().done(function(){
		// 		var instructorView = new UserItemView({model: instructor});
		// 		$('.user-detail').append(instructorView.render().el);
    //
		// 		//need more venue data in DB for this to work
		// 		var venue = new Venue({id: activity.get('venue_id')});
		// 		venue.fetch().done(function(){
		// 			var venueView = new VenueDetailView({model: venue});
		// 			$('.venue-detail').append(venueView.render().el);
    //
		// 			//need more data in DB for this to work
		// 			var activityType = new ActivityType({id: activity.get('activity_type_id')});
		// 			activityType.fetch().done(function(){
		// 				var activityTypeView = new ActivityTypeDetailView({model: activityType});
		// 				$('.activity-type-detail').append(activityTypeView.render().el);
    //
		// 				//shows all participants with this activity id
		// 				var participants = new Participants({activity_id: activity.get('activity_id')});
		// 				participants.fetch().done(function() {
		// 					participants.each(function(attendee) {
		// 						var view = new ParticipantItemView({ model: attendee});
		// 						$('.participants-list').append(view.render().el);
		// 					});
		// 				});
		// 			});
		// 		});
		// 	});
		// });

		//show one activity plus trainer info,
		//venue info, participants list
		//change from hard coded when more data exists in DB
		// console.log('SHOW PAGE');
		// var activity = new Activity({id: 22});
		// activity.fetch().done(function(){
		// 	//make a view showing the activity
		// 	var activityView = new ActivityDetailView({model: activity});
		// 	$('.activity-detail').append(activityView.render().el);

		// 	var instructor = new User({id: activity.get('user_id')});
		// 	instructor.fetch().done(function(){
		// 		var instructorView = new UserItemView({model: instructor});
		// 		$('.user-detail').append(instructorView.render().el);

		// 		//need more venue data in DB for this to work
		// 		var venue = new Venue({id: activity.get('venue_id')});
		// 		venue.fetch().done(function(){
		// 			var venueView = new VenueDetailView({model: venue});
		// 			$('.venue-detail').append(venueView.render().el);

		// 			//need more data in DB for this to work
		// 			var activityType = new ActivityType({id: activity.get('activity_type_id')});
		// 			activityType.fetch().done(function(){
		// 				var activityTypeView = new ActivityTypeDetailView({model: activityType});
		// 				$('.activity-type-detail').append(activityTypeView.render().el);

		// 				//shows all participants with this activity id
		// 				var participants = new Participants({activity_id: activity.get('activity_id')});
		// 				participants.fetch().done(function() {
		// 					participants.each(function(attendee) {
		// 						var view = new ParticipantItemView({ model: attendee});
		// 						$('.participants-list').append(view.render().el);
		// 					});
		// 				});
		// 			});
		// 		});
		// 	});
		// });
	},

	login: function(){
		console.log("Login route loading...");

    setupBody();

    var loginForm = new LoginFormView();
    $('body').append(loginForm.render().el);

    var footer = new FooterView();
    $('body').append(footer.render().el);
	},

	signUp: function(){

	},

	trainerDash: function(){

	},

	trainerActivitiesList: function(){


	},

	trainerActivityDetails: function(){

	},

	trainerActivityCreate: function(){

	},

	trainerActivityEdit: function(){

	},

	trainerContactsList: function(){
		//container for contacts list
		var contactsListContainer = new ContactsListContainer();
		$('body').append(contactsListContainer.render().el);

		//contacts list with user data
		var contacts = new Contacts();
		contacts.fetch().done(function() {
			contacts.each(function(person) {
				var contactsList = new UserItemView({ model: person});
				$('.users-list').append(contactsList.render().el);
			});
		});
	},

	trainerSendMessage: function(){

	},

	trainerCalendar: function(){

	},

	studentDash: function(){

	},

	studentActivitiesList: function(){

	},

	studentActivityDetails: function(){

	},

	studentActivityBook: function(){

	},

	studentContactsList: function(){
		//container for contacts list
		var trainersListContainer = new TrainersListContainer();
		$('body').append(trainersListContainer.render().el);

		//contacts list with user data
		var contacts = new Contacts();
		contacts.fetch().done(function() {
			contacts.each(function(person) {
				var contactsList = new UserItemView({ model: person});
				$('.users-list').append(contactsList.render().el);
			});
		});
	},

	studentTrainerDetail: function(){

	},

	studentCalendar: function(){

	}

});
