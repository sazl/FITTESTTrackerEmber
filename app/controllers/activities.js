import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['description'],
  sortAscending: true
});
