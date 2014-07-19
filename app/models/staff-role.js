import DS from 'ember-data';

export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  location: DS.attr('string'),
  comments: DS.attr('string'),
  confirmedType: DS.belongsTo('confirmedType'),
  activityRole: DS.belongsTo('activityRole'),
  staff: DS.hasMany('staff', { async: true }),

  description: function() {
    return this.get('activityRole.description');
  }.property('activityRole.description'),
  
  firstStaff: function() {
    return this.get('staff').objectAt(0);
  }.property('staff.@each'),
  
  duration: function() {
    var startDate = this.get('startDate');
    var endDate = this.get('endDate');
    if (startDate && endDate) {
      return moment(endDate).diff(moment(startDate), 'days');
    }
    return null;
  }.property('startDate', 'endDate')
});
