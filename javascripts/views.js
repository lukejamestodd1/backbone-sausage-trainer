//========== VIEWS ===========//

var NavBarView = Backbone.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-default navbar-fixed-top',
  template: $('#navBarTemplate').html(),
  render: function(){
		var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
	}
});

var CarouselView = Backbone.View.extend({
  tagName: 'header',
  className: 'carousel slide',
  id: 'myCarousel',
  template: $('#carouselTemplate').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});

var SplashMainView = Backbone.View.extend({
  tagName: 'main',
  template: $('#splashMainTemplate').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});

var FooterView = Backbone.View.extend({
  tagName: 'div',
  id: 'footer',
  template: $('#footerTemplate').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});

var LoginFormView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#loginFormTemplate').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});

//for signup area - static atm
var SignupView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#signupTemplate').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer header title and controls
var MenuHeaderView = Backbone.View.extend({
  tagName: 'div',
  className: 'dash-title',
  template: $('#trainer-header-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student header title and controls
var StudentHeaderView = Backbone.View.extend({
  tagName: 'div',
  className: 'dash-title',
  template: $('#student-header-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer welcome/dashboard area
var TrainerDashContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#trainer-dashboard-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student welcome/dashboard area
var StudentDashContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#student-dashboard-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer activities list container
var TrainerActivitiesListView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#trainer-activities-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer activity list item
var ActivityItemView = Backbone.View.extend({
  tagName: 'tr',
  template: $('#activity-item-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for student activies list
var StudentActivitiesListView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#student-activities-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student activity list item
var StudentActivityItemView = Backbone.View.extend({
  tagName: 'tr',
  template: $('#student-activity-item-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for trainer calendar
var TrainerCalendarView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#trainer-calendar-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer small calendar
var TrainerCalendarSmallView = Backbone.View.extend({
  tagName: 'div',
  className: 'col-xs-12 col-sm-4',
  id: "calendar",
  template: $('#trainer-calendar-small-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student calendar
var StudentCalendarView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#student-calendar-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainer contacts list container
var ContactListContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid title-colourgraph',
  template: $('#trainer-contacts-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for list of trainers a student is following container
var TrainersListContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid table-responsive col-xs-12 col-md-12',
  template: $('#student-contacts-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for user list-items
var ContactItemView = Backbone.View.extend({
  tagName: 'tr',
  template: $('#user-item-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for trainer to view a single activity
var ActivityDetailView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#trainer-activity-detail-template').html(),
  render: function(){
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for student to see a single activity
var StudentActivityDetailView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#student-activity-detail-template').html(),
  render: function(){
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for main container - holds dash(header text, navigation),
//colour bar, and containers/lists below
var MainContainer = Backbone.View.extend({
  tagName: 'div',
  className: 'container main',
  template: $('#container-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//colour bar divider object
var ColourBar = Backbone.View.extend({
  tagName: 'div',
  template: $('#colour-bar-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for trainers to send message
var TrainerSendMessageView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#trainer-send-message-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student to view individual trainer
var StudentTrainerDetailView = Backbone.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: $('#student-view-trainer-details-template').html(),
  render: function(){
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});



