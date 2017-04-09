import Ember from 'ember';

export default Ember.Controller.extend({
	queryChanged: function() {
	 var filteredResults = this.content.filter(function (item) {
		 return (item.name.toLowerCase().indexOf(this.get('query').toLowerCase()) !== -1);
	 }.bind(this));

	 this.set('filteredContent', filteredResults);

 }.observes('query'),

 filteredContent: function() {
	 return this.content;
 }.property('@each.content')
});
