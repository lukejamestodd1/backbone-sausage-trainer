
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

//sets up the menu/header for each page
var setupMenu = function(){
	var mainContainer = new MainContainer();
	$('body').append(mainContainer.render().el);
	var header = new MenuHeaderView();
	$('.main').append(header.render().el);
	var colourBar = new ColourBar();
	$('.main').append(colourBar.render().el);
};

//sets up the menu/header for each page
var studentMenu = function(){
	var mainContainer = new MainContainer();
	$('body').append(mainContainer.render().el);
	var header = new StudentHeaderView();
	$('.main').append(header.render().el);
	var colourBar = new ColourBar();
	$('.main').append(colourBar.render().el);
};


//========== ROUTER ========= //


var Router = Backbone.Router.extend({

	routes: {
		"": "showIndex",
		"login": "login",
		"signup": "signUp",

		"trainer/dash": "trainerDash",
		"trainer/activities": "trainerActivitiesList",
		"trainer/calendar": "trainerCalendar",
		"trainer/contacts": "trainerContactsList",

		"trainer/activities/:id": "trainerActivityDetails",
		// "trainer/activities/new": "trainerActivityCreate",
		// "trainer/activities/edit": "trainerActivityEdit",
		"trainer/contacts/message": "trainerSendMessage",
		
		"student/dash": "studentDash",
		"student/activities": "studentActivitiesList",
		"student/calendar": "studentCalendar",
		"student/contacts": "studentContactsList",

		"student/activities/:id": "studentActivityDetails",
		// "student/activities/:id/book": "studentActivityBook",
		"student/users/:id": "studentTrainerDetail",

		"testing": "testingArea"
		
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
		setupBody();

		var signupView = new SignupView();
		$('body').append(signupView.render().el);

		var footer = new FooterView();
    $('body').append(footer.render().el);
	},

	trainerDash: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('Dashboard - trainer');
		$('#dashTab').addClass("active");
		var trainerDash = new TrainerDashContainerView();
		$('.main').append(trainerDash.render().el);

		//activities list
		var activities = new Activities();
		activities.fetch().done(function() {
			activities.each(function(instance) {
				var activityItem = new StudentActivityItemView({ model: instance});
				$('.userColumn').css('display', 'none');
				$('.activities-list').append(activityItem.render().el);
			});
		});
	},

	trainerActivitiesList: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('My Classes - trainer');
		$('#classesTab').addClass("active");
		
		var trainersActivityList = new TrainerActivitiesListView();
		$('.main').append(trainersActivityList.render().el);

		//activities list
		var activities = new Activities();
		activities.fetch().done(function() {
			activities.each(function(instance) {
				var activityItem = new ActivityItemView({ model: instance});
				$('.activities-list').append(activityItem.render().el);
			});
		});
	},

	trainerCalendar: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('Calendar - trainer');
		$('#dashTab').addClass("active");

		var trainerCalendar = new TrainerCalendarView();
		$('body').append(trainerCalendar.render().el);
		$('#calendar').fullCalendar({
	      theme: true,
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
	      },
	      defaultDate: '2016-01-12',
	      editable: true,
	      eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2016-01-01'
	        }
	      ]
  	});
	},

	trainerContactsList: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('Contacts - trainer');
		$('#contactsTab').addClass("active");

		var contactListContainer = new ContactListContainerView();
		$('.main').append(contactListContainer.render().el);
		//contacts list with user data
		var contacts = new Contacts();
		contacts.fetch().done(function() {
			contacts.each(function(person) {
				var contactsList = new ContactItemView({ model: person});
				$('.users-list').append(contactsList.render().el);
			});
		});
	},

	trainerActivityDetails: function(id){
		console.log('trainer activity detail view');
		setupBody();
		var activityItem = new Activity({id: id });
		activityItem.fetch().done(function(){
			var trainerActivityDetails = new ActivityDetailView({model: activityItem});
			$('body').append(trainerActivityDetails.render().el);

		});
		
		
	},

	trainerActivityCreate: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('New Activity');
		
	},

	trainerActivityEdit: function(){
		setupBody();
		setupMenu();
		$('.header-title').html('Edit Activity');
		
	},

	
	trainerSendMessage: function(){
		setupBody();
		var sendMessageView = new TrainerSendMessageView();
		$('body').append(sendMessageView.render().el);
	},

	
	studentDash: function(){
		setupBody();
		studentMenu();
		$('.header-title').html('Dashboard - student');
		$('#dashTab').addClass("active");
		var studentDash = new StudentDashContainerView();
		$('.main').append(studentDash.render().el);

		//activities list
		var activities = new Activities();
		activities.fetch().done(function() {
			activities.each(function(instance) {
				var activityItem = new StudentActivityItemView({ model: instance});
				$('.userColumn').css('display', 'none');
				$('.activities-list').append(activityItem.render().el);
			});
		}); 
	},

	studentActivitiesList: function(){
		setupBody();
		studentMenu();
		$('.header-title').html('My Classes - student');
		$('#classesTab').addClass("active");
		var studentActivityList = new StudentActivitiesListView();
		$('body').append(studentActivityList.render().el);

		//activities list with
		var activities = new Activities();
		activities.fetch().done(function() {
			activities.each(function(instance) {
				var activityItem = new StudentActivityItemView({ model: instance});
				$('.activities-list').append(activityItem.render().el);
			});
		});
	},

	studentCalendar: function(){
		setupBody();
		studentMenu();
		$('.header-title').html('Calendar - student');
		$('#calendarTab').addClass("active");
		var studentCalendar = new StudentCalendarView();
		$('.main').append(studentCalendar.render().el);
		$('#calendar').fullCalendar({
	      theme: true,
	      header: {
	        left: 'prev,next today',
	        center: 'title',
	        right: 'month,agendaWeek,agendaDay'
	      },
	      defaultDate: '2016-01-12',
	      editable: true,
	      eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2016-01-01'
	        }
	      ]
  	});
	},

	studentContactsList: function(){
		setupBody();
		studentMenu();
		$('.header-title').html('My Trainers');
		$('#contactsTab').addClass("active");
		//container for contacts list
		var trainersListContainer = new TrainersListContainerView();
		$('body').append(trainersListContainer.render().el);

		//contacts list with user data
		var contacts = new Contacts();
		contacts.fetch().done(function() {
			contacts.each(function(person) {
				var contactsList = new ContactItemView({ model: person});
				$('.users-list').append(contactsList.render().el);
			});
		});
	},

	studentActivityDetails: function(id){
		//this is just a copy of 'trainer activity detail view' atm
		//buttons changed using ids for buttons
		setupBody();
		var activityItem = new Activity({id: id });
		activityItem.fetch().done(function(){
			var trainerActivityDetails = new ActivityDetailView({model: activityItem});

			$('body').append(trainerActivityDetails.render().el);
			$('#editButton').html('Book this class');
			$('#deleteButton').html('Message Instructor');
		});
	},

	// studentActivityBook: function(id){
	// 	setupBody();
	// 	studentMenu();
	// 	var studentBook = new Activity({id: id })
	// },

	studentTrainerDetail: function(id){
		setupBody();
		studentMenu();
		var trainer = new User({id: id});
		trainer.fetch().done(function(){
			var trainerDetailView = new StudentTrainerDetailView({model: trainer});
			$('.header-title').html(trainer.get('username'));
			$('.main').append(trainerDetailView.render().el);

			//activities list
			var activities = new Activities({user_id: id});
			activities.fetch().done(function() {
				activities.each(function(instance) {
					var activityItem = new StudentActivityItemView({ model: instance});
					$('.userColumn').css('display', 'none');
					$('.activities-list').append(activityItem.render().el);

				});
			});

		});
		
	},

	testingArea: function(){


	}

});

		//Parts of pages
		// //append container to body
		// var mainContainer = new MainContainer();
		// $('body').append(mainContainer.render().el);

		// //append header to container main
		// var header = new TrainerHeader();
		// $('.main').append(header.render().el);

		// //append colour bar to container main
		// var colourBar = new ColourBar();
		// $('.main').append(colourBar.render().el);

		// //append other divs of info below colour bar.
