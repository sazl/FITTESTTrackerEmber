import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {    
    this._super(controller, model);
    controller.set('staffTypes', this.store.find('staffType'));
    controller.set('profileTypes', this.store.find('profileType'));
    controller.set('nationalities', this.store.find('country'));
    controller.set('languages', this.store.find('language'));
    controller.set('staffRoles', this.store.find('staffRole'));
  }
});
