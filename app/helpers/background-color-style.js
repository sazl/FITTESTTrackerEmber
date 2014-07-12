import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(color) {
    return 'background: #' + color + ';';
});
