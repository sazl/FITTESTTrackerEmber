import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: null,
  endDate: null,
  selectedActivities: [],
  selectedStaffTypes: [],
  showToday: false,
  todayDate: null,
  showWeeklyGrid: false,
  weekStartDate: 'Sunday',
  showDateBars: false,
  showConfirmedOnly: false,
  showPlannedEvents: false,

  staffTypes: [],
  activities: [],
  weekStartDates: ['Sunday', 'Monday'],

  groups: new vis.DataSet([
    {id: 0, content: 'First', value: 1},
    {id: 1, content: 'Third', value: 3},
    {id: 2, content: 'Second', value: 2}
  ]),

  items: new vis.DataSet([
    {id: 0, group: 0, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 21)},
    {id: 1, group: 0, content: 'item 1', start: new Date(2014, 3, 19), end: new Date(2014, 3, 20)},
    {id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24)},
    {id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 23), end: new Date(2014, 3, 24)},
    {id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 22), end: new Date(2014, 3, 26)},
    {id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27)}
  ])  
});
