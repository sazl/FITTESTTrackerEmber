import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  color: null,
  classNames: ['label', 'label-primary'],
  attributeBindings: ['style'],
  
  style: function() {
    return 'background-color: #' + this.get('color');
  }.property('color')
});
