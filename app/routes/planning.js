import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('activities', this.store.find('activity'));
    controller.set('confirmedTypes', this.store.find('confirmedType'));
    controller.set('staffRoles', this.store.find('staffRole'));
    controller.set('staffList', this.store.find('staff'));
  }
});
