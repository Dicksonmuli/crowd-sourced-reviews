import Ember from 'ember';

export default Ember.Route.extend({
model(){
	return Ember.RSVP.hash({
		restaurants: this.store.findAll('restaurant'),
		// reviews: this.store.findAll('reviews')
	});
},
// actions
actions: {
	// updating a restaurant
	update(restaurant, params){
		Object.keys(params).forEach(function(key) {
			if(params[key]!==undefined){
				restaurant.set(key,params[key]);
			}
		});
		restaurant.save();
		this.transitionTo('admin');
	},
	// deleting a restaurant
	destroyRestaurant(restaurant){
		var review_deletions = restaurant.get('reviews').map(function(review) {
			return review.destroyRecord();
		});
		Ember.RSVP.all(review_deletions).then(function() {
			return restaurant.destroyRecord();
		});
		this.transitionTo('admin');
 }
 }
});
