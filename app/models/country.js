import DS from 'ember-data';

export default DS.Model.extend({
  isocode: DS.attr('string'),
  fullName: DS.attr('string'),
  region: DS.attr('string')
});
