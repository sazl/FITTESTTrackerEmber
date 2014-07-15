import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-test', // TODO: loaded via config
  Resolver: Resolver
});

Ember.Inflector.inflector.irregular('staff', 'staffList');

Ember.View.reopen({
  didInsertElement : function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.didRenderElement);
  },
  didRenderElement : function() {
  }
});


loadInitializers(App, 'ember-test');

export default App;
