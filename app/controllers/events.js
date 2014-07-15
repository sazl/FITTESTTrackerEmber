import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    deleteEvent: function(event) {
      console.log(event);
      event.destroyRecord();
      console.log(event);
    }
  }
});
