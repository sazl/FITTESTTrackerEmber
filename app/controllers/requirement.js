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

  container: null,
  groups: new vis.DataSet([]),
  items: new vis.DataSet([]),
  
  actions: {
    generateRequirementTimeline: function() {
      var self = this;
      var groups = [];
      var items = [];
      var container = this.get('container');

      var selectedActivities = this.get('selectedActivities');
      selectedActivities.forEach(function(activity) {
        var res = {};
        res.id = activity.get('id');
        res.content = activity.get('description');
        res.value = activity.get('id');
        groups.pushObject(res);
      });
      
      var activityRolesPromises = selectedActivities.getEach('activityRole');
      Ember.RSVP.all(activityRolesPromises)
        .then(function(activityRolesSets) {
          var profileTypePromises = activityRolesSets.getEach('profileType');
          Ember.RSVP.all(profileTypePromises).then(function(profileTypesSets) {
            console.log(profileTypesSets);
            var profileTypes = profileTypesSets.map(function(ptset) {
              return [].pushObjects(ptset.toArray());
            });
            
            var activityRoles = activityRolesSets.map(function(set){
              return [].pushObjects(set.toArray());
            });
            
            activityRoles.forEach(function(ars, idx, en2) {
              ars.forEach(function(ar) {
                var role = {};
                role.id = parseInt(ar.get('id'));
                role.group = parseInt(idx + 1);
                role.content = ar.get('profileType');
                var startDate = ar.get('startDate');
                var endDate = ar.get('endDate');
                role.start = startDate ? startDate : '01/01/2000';
                role.end = endDate ? endDate : '01/01/2000';
                console.log(role);
                items.push(role);
              });
            });
          });

          console.log(groups);
          console.log(items);
          self.set('groups', new vis.DataSet(groups));
          self.set('items', new vis.DataSet(items));
        });
    }
  }
});
