import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: null,
  endDate: null,
  selectedActivities: [],
  showToday: false,
  todayDate: null,
  showWeeklyGrid: false,
  weekStartDate: 'Sunday',
  showDateBars: false,
  showConfirmedOnly: false,
  showPlannedEvents: false,

  activities: [],
  weekStartDates: ['Sunday', 'Monday'],

  groups: new vis.DataSet([]),
  items: new vis.DataSet([]),

  actions: {
    generateRequirementTimeline: function() {
      var activities = this.get('activities');
      var groups = [];
      var items = [];
      activities.forEach(function (item, index, en) {
        var res = {};
        res.id = item.get('id');
        res.content = item.get('description');
        res.value = item.get('id') + 1;
        groups.push(res);
        console.log(item);
        var activityRoles = item.get('activityRole');
        activityRoles.forEach(function (ar, idx, en2) {
          var role = {};
          role.id = ar.get('id');
          role.group = res.id;
          role.content = ar.get('profileType').get('profileType');
          role.start = ar.get('startDate');
          role.end = ar.get('endDate');
          items.push(role);
        });
      });
      
      this.set('groups', new vis.DataSet(groups));
      this.set('items', new vis.DataSet(items));
    }
  }
});
