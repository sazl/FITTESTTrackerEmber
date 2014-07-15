import Ember from 'ember';

export default Ember.View.extend({
  didRenderElement: function() {
    this.$('select').select2();
    this.$('.datepicker').datepicker();
  }
});
