import DS from 'ember-data';

export default DS.Model.extend({
  activityType: DS.attr('string'),
  colorCode: DS.attr('string'),
  activity: DS.hasMany('activity', { async:true })
});
