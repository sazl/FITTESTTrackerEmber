import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Component.extend({
  item: null,
  deleteAction: 'deleteItem',
  deleteConfirmAction: 'deleteConfirmItem',
  editAction: 'editItem',
  createAction: 'createItem',
  isShowingConfirmation: false,

  actions: {
    deleteConfirmItem: function(item) {
      this.toggleProperty('isShowingConfirmation');
    },
    
    deleteItem: function(item) {
      this.toggleProperty('isShowingConfirmation');
      item.destroyRecord();
      Notify.success('Deleted: ' +
                     item.get('constructor.typeKey') +
                     ' ID: ' + item.get('id'));
    }
  }
});
