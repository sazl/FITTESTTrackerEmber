import DS from 'ember-data';

export default DS.Model.extend({
  profileType: DS.attr('string'),
  staff: DS.hasMany('staff', { async: true }),
  activityRole: DS.hasMany('activityRole', { async: true })
});
