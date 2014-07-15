import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['label', 'label-primary'],
  attributeBindings: [
    'href',
    'data-toggle:toggle',
    'data-placement:placement',
    'title'
  ],

  href: null,
  toggle: 'tooltip',
  placement: 'bottom',
  title: null,
  
  didRenderElement: function() {
    this.$().tooltip();
  }
});
