import Ember from 'ember';

export default Ember.Component.extend({
	ifDescriptionShowing: false,
// actions
actions: {
	showDescription(){
		this.set('ifDescriptionShowing', true);
	},
	hideDescription: function () {
		this.set('ifDescriptionShowing', false);
	}
}
});
