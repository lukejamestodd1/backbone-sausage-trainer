console.log('sausage trainer')

//========== ROUTER ========= //


var router = new Router();
Backbone.history.start();


//========== VIEWS ===========//


//for a list of users
var UserItemView = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	template: $('#user-item-template').html(),
	render: function() {
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//for list of activities on main page
var ActivityItemView = Backbone.View.extend({
	tagName: 'div',
	className: 'ui-card',
	template: $('#activity-item-template').html(),
	render: function() {
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//for detailed view of a single activity
var ActivityDetailView = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	template: $('#activity-detail-view').html(),
	render: function(){
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//for "show activity" page - venue info
var VenueDetailView = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	template: $('#venue-item-template').html(),
	render: function(){
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//for "show activity" page - activity type (to get name)
var ActivityTypeDetailView = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	template: $('#activity-detail-item-template').html(),
	render: function(){
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//for "show activity" page - list of participants
var ParticipantItemView = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	template: $('#participant-item-template').html(),
	render: function() {
		var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});

//show all the ui-cards by appending them to "list" on page
// users.each(function(person) {
// 		console.log(person.get('email'));
// 		var view = new ObjectItemView({ model: person, template: $userTemplate});
// 		$('main').append(view.render().el);
// });

// venues.each(function(place) {
// 		console.log(place.get('address'));
// 		var view = new ObjectItemView({ model: place, template:  $venueTemplate});
// 		$('.list').append(view.render().el);
// });

// participants.each(function(attendee) {
// 		console.log(attendee.get('user_id'));
// 		var view = new ObjectItemView({ model: attendee, template:  $participantTemplate});
// 		$('.list').append(view.render().el);
// });

// activityTypes.each(function(typeOfActivity) {
// 		console.log(typeOfActivity.get('description'));
// 		var view = new ObjectItemView({ model: typeOfActivity, template:  $activityTypeTemplate});
// 		$('.list').append(view.render().el);
// });

// contacts.each(function(client) {
// 		console.log(client.get('created_at'));
// 		var view = new ObjectItemView({ model: client, template:  $contactTemplate});
// 		$('.list').append(view.render().el);
// });

// activities.each(function(instance) {
// 		console.log(instance.get('title'));
// 		var view = new ObjectItemView({ model: instance, template:  $activityTemplate});
// 		$('.list').append(view.render().el);
// });

// groups.each(function(club) {
// 		console.log(club.get('name'));
// 		var view = new ObjectItemView({ model: club, template:  $groupTemplate});
// 		$('.list').append(view.render().el);
// });

// groupEntries.each(function(ge) {
// 		console.log(ge.get('group_id'));
// 		var view = new ObjectItemView({ model: ge, template:  $groupEntriesTemplate});
// 		$('.list').append(view.render().el);
// });


/*

//========== temporary arrays to store new backbone objects 

var usersArray = [];
var activitiesArray = [];
var venuesArray = [];
var participantsArray = [];
var activityTypesArray = [];


//=====create objects for each element in each api class
//and store in the appropriate objects array

var makeObjects = function(objectModel, apiCollection, objectsArray){
	for (var i = 0; i < apiCollection.length; i++){
		var object = new objectModel();
		
		//for each key in the api element, make an attribute for the Backbone object

		//set the value for each attribute to the value in api data. eg:
		object.set({
			id: i,
			name: apiData[i].name,
			ability: apiData[i].ability,
			phrase: apiData[i].phrase,
			image_url: apiData[i].image_url
		});
		console.log(mutant.get('name'));
		objectsArray.push(object);
	}
}

makeObects(User, apiData[index], usersArray);
makeObects(Activity, apiData[index], activitiesArray);
makeObects(Venue, apiData[index], venuesArray);
makeObects(Participant, apiData[index], participantsArray);
makeObects(ActivityType, apiData[index], activityTypesArray);


//===== make new instance of each collection by passing in  js array of objects
var users = new Users(usersArray);
var activites = new Activities(activitiesArray);
var venues = new Venues(venuesArray);
var participants = new Participants(participantsArray);
var activityTypes = new ActivitiesTypes(activityTypesArray);






*/

