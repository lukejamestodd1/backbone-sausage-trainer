
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
		// "signup": "signUp",
    //
		// "trainer/dash": "trainerDash",
		// "trainer/activities": "trainerActivitiesList",
		// "trainer/activities/:id": "trainerActivityDetails",
		// "trainer/activities/new": "trainerActivityCreate",
		// "trainer/activities/edit": "trainerActivityEdit",
		"trainer/contacts": "trainerContactsList",
		// "trainer/contacts/message": "trainerSendMessage",
		// "trainer/calendar": "trainerCalendar",
    //
		// "student/dash": "studentDash",
		// "student/activities": "studentActivitiesList",
		// "student/activities/:id": "studentActivityDetails",
		// "student/activities/:id/book": "studentActivityBook",
		"student/contacts": "studentContactsList",
		//	"student/contacts/:id": "studentTrainerDetail",
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
		setupBody();
		//container for contacts list
		var contactListContainer = new ContactListContainerView();
		$('body').append(contactListContainer.render().el);

		//contacts list with user data
		var contacts = new Contacts();
		contacts.fetch().done(function() {
			contacts.each(function(person) {
				var contactsList = new ContactItemView({ model: person});
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
		setupBody();
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
