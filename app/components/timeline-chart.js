import Ember from 'ember';

export default Ember.Component.extend({
  groups: null,
  items: null,
  visDataSet: new vis.DataSet(),
  timeline: null,

  didInsertElement: function() {
    var container = this.$('<div>').appendTo(this.$())[0];
    var options = {
      groupOrder: 'id',
      editable: false
    };
    
    var timeline = new vis.Timeline(container);
    timeline.setOptions(options);
    timeline.setGroups(this.get('groups'));
    timeline.setItems(this.get('items'));
    this.set('timeline', timeline);
  }
});
