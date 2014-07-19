import DS from 'ember-data';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  location: DS.attr('string'),
  activity: DS.belongsTo('activity'),
  profileType: DS.belongsTo('profileType', { async: true }),
  staffRole: DS.hasMany('staffRole', { async: true }),

  description: function() {
    var location = this.get('location');
    return this.get('activity.description')
      + ' | ' + this.get('profileType.profileType')
      + ' | ' + (location ? location : '-');
  }.property('activity.description', 'profileType.profileType', 'location'),
  
  duration: function() {
    var startDate = this.get('startDate');
    var endDate = this.get('endDate');
    if (startDate && endDate) {
      return moment(endDate).diff(moment(startDate), 'days');
    }
    return null;
  }.property('startDate', 'endDate')
});
