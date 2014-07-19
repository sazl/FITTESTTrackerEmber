import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  padding: true,
  button_label: 'Create',
  button_type: 'submit',
  
  actions: {
    createAction: function() {
      this.sendAction();
    }
  }
});
