import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: null,
  endDate: null,
  selectedActivities: [],
  selectedStaffTypes: [],
  showToday: false,
  todayDate: null,
  showWeeklyGrid: false,
  weekStartDate: 'Sunday',
  showDateBars: false,
  showConfirmedOnly: false,
  showPlannedEvents: false,

  staffTypes: [],
  activities: [],
  weekStartDates: ['Sunday', 'Monday'],

  groups: new vis.DataSet([]),
  items: new vis.DataSet([]),

  actions: {
    generateDeploymentTimeline: function() {
      var staffTypes = this.get('selectedStaffTypes');
      var staff = staffTypes.getEach('staff');
      var groups = [];
      staff.forEach(function (item, index, en) {
        item.forEach(function(i, idx, en2) {
          var res = {};
          res.id = i.get('id');
          res.content = i.get('fullName');
          res.value = i.get('id') + 1;
          groups.push(res);
        });
      });

      var activities = this.get('activities');
      
    }
  }
});
