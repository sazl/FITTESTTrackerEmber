import DS from 'ember-data';

var Language = DS.Model.extend({
  language: DS.attr('string')
});

export default Language;
