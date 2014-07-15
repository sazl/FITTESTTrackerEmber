import Ember from 'ember';

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
    }
  }
});
