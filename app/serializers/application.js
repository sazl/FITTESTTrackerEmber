import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForRelationship: function(key, relationship) {
    if (relationship === 'belongsTo') {
      return key + 'Id';
    }
    else {
      return key + 'Ids';
    }
  }
});
