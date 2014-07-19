import Ember from 'ember';
import Notify from 'ember-notify';

var PlanningController = Ember.Controller.extend(Ember.Validations.Mixin);

PlanningController.reopen({
  activityNotAvailable: false,
  selectedActivity: null,
  selectedConfirmedType: null,
  selectedStaffRole: null,
  
  activites: [],
  confirmedTypes: [],
  staffRoles: [],
  staffList: [],

  staffRoleLocation: function() {
    return this.get('selectedStaffRole.location');
  }.property('selectedStaffRole.location'),

  staffRoleStartDate: function() {
    return this.get('selectedStaffRole.startDate');
  }.property('selectedStaffRole.startDate'),

  staffRoleEndDate: function() {
    return this.get('selectedStaffRole.endDate');
  }.property('selectedStaffRole.endDate'),

  staffRoleComments: function() {
    return this.get('selectedStaffRole.comments');
  }.property('selectedStaffRole.comments'),

  staffRoleConfirmedType: function() {
    return this.get('selectedStaffRole.confirmedType');
  }.property('selectedStaffRole.confirmedType'),

  staffRoleStaff: function() {
    return this.get('selectedStaffRole.firstStaff');
  }.property('selectedStaffRole.firstStaff'),
  
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
  
  actions: {
    toggleEdit: function(item) {
      Notify.success(
        new Handlebars.SafeString(
          '<b>Selected Staff Role:</b><br/>'
            + item.get('description') + '<br/>'
            + item.get('firstStaff.fullName'))
      );
      this.set('selectedStaffRole', item);
    },

    createStaffRole: function() {
      Notify.success('Staff Role Updated');
    }
  },

  validations: {
  }
});

export default PlanningController;
