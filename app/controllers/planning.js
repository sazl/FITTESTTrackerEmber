import Ember from 'ember';

export default Ember.Controller.extend({
  activityNotAvailable: false,
  selectedActivity: null,
  selectedConfirmedType: null,
  
  activites: [],
  confirmedTypes: [],
  staffRoles: [],

  activitiesChanged: function() {
    this.set('selectedActivity', this.get('selectedActivities').objectAt(0));
  }.observes('selectedActivities.@each'),

  confirmedTypesChanged: function() {
    this.set('selectedConfirmedType', this.get('confirmedTypes').objectAt(0));
  }.observes('confirmedTypes.@each'),

  selectedActivities: function() {
    var activities = this.get('activities');
    var selectedConfirmedType = this.get('selectedConfirmedType');
    var result = activities.filterBy('confirmedType', selectedConfirmedType);
    this.set('activityNotAvailable', result.length > 0 ? false : true);
    return result;
  }.property('selectedConfirmedType', 'activities.@each'),
  
  selectedConfirmedTypeChanged: function() {
    
  }.observes('selectedConfirmedType'),

  selectedActivityChanged: function() {

  }.observes('selectedActivity'),

  actions: {
    
  }
});
