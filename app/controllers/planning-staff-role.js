import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.ObjectController.extend({
  actions: {
    toggleEdit: function(item) {
      return true;
    }
  }
});
