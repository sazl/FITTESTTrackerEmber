import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  etcServiceMap: DS.attr('string'),
  activityType: DS.belongsTo('activityType'),
  confirmedType: DS.belongsTo('confirmedType'),
  country: DS.hasMany('country', { async: true }),
  activityRole: DS.hasMany('activityRole', { async: true })
});
