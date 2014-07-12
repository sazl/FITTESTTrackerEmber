import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  if (value === null) {
    return '';
  }
  else {
    return moment(value).format('DD/MM/YYYY');
  }
});
