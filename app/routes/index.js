import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			restaurants: this.store.findAll('restaurant'),
			reviews: this.store.findAll('reviews')
		});
	}
});
