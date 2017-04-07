import Ember from 'ember';

export default Ember.Route.extend
model(){
	return Ember.RSVP.hash({
		restaurants: this.store.findAll('restaurant'),
		// reviews: this.store.findAll('reviews')
	});
},
actions: {
	update(restaurant, params){
		Object.keys(params).forEach(function(key) {
			if(params[key]!==undefined){
				rental.set(key,params[key]);
			}
		 });
		rental.save();
		this.transitionTo('admin');
	},
	destroyRestaurant(restaurant) {
	 var review_deletions = rental.get('reviews').map(function(review) {
		 return review.destroyRecord();
	 });
	 Ember.RSVP.all(review_deletions).then(function() {
		 return rental.destroyRecord();
	 });
	 this.transitionTo('admin');
 }
 }
});
