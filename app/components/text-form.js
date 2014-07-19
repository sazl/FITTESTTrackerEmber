import Ember from 'ember';

export default Ember.Component.extend({
  label: null,
  type: 'text',
  value: null,
  disabled: false,
  required: false,
  
  placeholder: function() {
    return this.get('label');
  }.property('label'),
  
  id: function() {
    return this.get('label').split(' ').join('').toLowerCase();
  }.property('label')
});
