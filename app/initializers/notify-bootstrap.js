import Notify from 'ember-notify';

export default {
  name: 'notify-bootstrap',

  initialize: function(/* container, app */) {
    Notify.useBootstrap();
  }
};
