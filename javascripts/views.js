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

//for trainer contacts list container
var ContactListContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#trainer-contacts-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for student contacts list container
var TrainersListContainerView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#student-contacts-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for a list of users
var ContactItemView = Backbone.View.extend({
  tagName: 'tr',
  template: $('#user-item-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//for trainer activities list container
var TrainerActivitiesListView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#trainer-activities-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for list of activities
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
  className: 'container',
  template: $('#student-activities-list-template').html(),
  render: function(){
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//for list of activities
var StudentActivityItemView = Backbone.View.extend({
  tagName: 'tr',
  template: $('#student-activity-item-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});
