import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  title: DS.attr('string'),
  mobile: DS.attr('string'),
  thuraya: DS.attr('string'),
  staffColorCode: DS.attr('string'),
  staffType: DS.belongsTo('staffType'),
  profileType: DS.hasMany('profileType', { async: true } ),
  nationality: DS.hasMany('country', { async: true } ),
  language: DS.hasMany('language', { async: true }),
  staffRole: DS.hasMany('staffRole', { async: true }),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
