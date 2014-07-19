import Ember from 'ember';

export default Ember.ObjectController.extend({
  isExpanded: true,
  
  actions: {
    collapse: function() {
      this.toggleProperty('isExpanded');
    }
  }
});
