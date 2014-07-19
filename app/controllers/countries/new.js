import Ember from 'ember';
import Notify from 'ember-notify';

var CountryNewController = Ember.Controller.extend(Ember.Validations.Mixin);
CountryNewController.reopen({
  fullName: null,
  isocode: null,
  region: null,
  
  actions: {
    createCountry: function() {
      this.store.createRecord('country', {
        fullName: this.get('fullName'),
        isocode: this.get('isocode'),
        region: this.get('region')
      }).save();
      
      this.set('fullName', null);
      this.set('isocode', null);
      this.set('region', null);
    }
  },

  validations: {
    fullName: {
      presence: true
    },
    isocode: {
      presence: true
    },
    region: {

    }
  }
});

export default CountryNewController;
