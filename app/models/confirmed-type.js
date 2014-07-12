import DS from 'ember-data';

export default DS.Model.extend({
  confirmedType: DS.attr('string'),
  confirmedColorCode: DS.attr('string'),
  staffRole: DS.hasMany('staffRole'),
  activityRole: DS.hasMany('activityRole')
});
