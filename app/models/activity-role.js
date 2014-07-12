import DS from 'ember-data';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  location: DS.attr('string'),
  activity: DS.belongsTo('activity'),
  profileType: DS.belongsTo('profileType'),
  staffRole: DS.hasMany('staffRole', { async: true }),

  duration: function() {
    var startDate = this.get('startDate');
    var endDate = this.get('endDate');
    if (startDate && endDate) {
      return moment(endDate).diff(moment(startDate), 'days');
    }
    return null;
  }.property('startDate', 'endDate')
});
