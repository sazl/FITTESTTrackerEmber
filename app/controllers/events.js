import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    deleteEvent: function(event) {
      console.log(this.store);
      console.log(event);
    }
  }
});
