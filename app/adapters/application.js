import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'fittesttracker/rest',
  host: 'http://localhost:8080',
  buildURL: function(record, suffix){
    return this._super(record, suffix);
  }
});
