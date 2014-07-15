import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(model, controller);
    controller.set('activities', this.store.find('activity'));
    controller.set('staffTypes', this.store.find('staffType'));
  }
});
