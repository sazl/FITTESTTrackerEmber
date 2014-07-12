import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  colorCode: DS.attr('string')
});
