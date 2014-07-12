import DS from 'ember-data';

export default DS.Model.extend({
  staffType: DS.attr('string'),
  staff: DS.hasMany('staff', { async: true })
});
