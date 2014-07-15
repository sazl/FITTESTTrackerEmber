import Ember from 'ember';

export default Ember.View.extend({
  didRenderElement: function() {
    this.$('#activity-roles-table').dataTable({
      "process": true
    });
  }
});
