import Ember from 'ember';

export default Ember.View.extend({
  didRenderElement: function() {
    this.$('#activities-table').dataTable({
      "process": true
    });
  }
});
