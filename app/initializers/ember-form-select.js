export default {
  name: 'ember-form-select',

  initialize: function(/* container, app */) {
    Ember.Forms.FormSelectComponent.reopen({
      multiple: undefined,
      
      controlView: Ember.Select.extend(Ember.Forms.ControlMixin, {
        model: Ember.computed.alias('parentView.model'),
        propertyName: Ember.computed.alias('parentView.propertyName'),
        content: Ember.computed.alias('parentView.content'),
        optionValuePath: Ember.computed.alias('parentView.optionValuePath'),
        optionLabelPath: Ember.computed.alias('parentView.optionLabelPath'),
        prompt: Ember.computed.alias('parentView.prompt'),
        multiple: Ember.computed.alias('parentView.multiple')
      })
    });
  }
};
