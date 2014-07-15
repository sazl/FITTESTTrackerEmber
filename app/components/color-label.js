import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['label', 'label-default'],
  color: null,

  didInsertElement: function() {
    this.$().css('background-color', '#' + this.get('color'));
  }
});
