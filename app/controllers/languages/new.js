import Ember from 'ember';
import Notify from 'ember-notify';


var LanguageNewController = Ember.ObjectController.extend(Ember.Validations.Mixin);
LanguageNewController.reopen({
  language: null,

  actions: {
    createLanguage: function() {
      var language = this.get('language');
      if (language) {
        this.store.createRecord('language', {
          language: language
        }).save();
        this.set('language', null);
        Notify.success('Language Created');
      }
    }
  },

  validations: {
    language: {
      presence: true
    }
  }
});

export default LanguageNewController;
