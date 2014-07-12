import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTestENV.locationType,
  events: {
    error: function(error, transition) {
      console.log(transition);
      console.log(error.message);
    }
  }
});

Router.map(function() {
  
  this.resource('dashboard', function() {
    this.resource('active-info');
    this.resource('active-chart');
  });
  
  this.resource('planning-dashboard', function(){
    this.resource('planning', function() {
      this.resource('planning-table');
    });
  });

  this.resource('deployment-dashboard', function() {
    this.resource('deployment');
  });
  
  this.resource('requirement-dashboard', function() {
    this.resource('requirement');
  });

  this.resource('activity-dashboard', function() {
    this.resource('activities', { path : '/activities' }, function() {
      this.resource('activity', { path : ':activity_id' }, function() {
        this.route('new');
        this.route('edit');
        this.route('delete');
      });
    });
    this.resource('activity-roles');
    this.resource('activity-types');
    this.resource('events');
  });

  this.resource('staff-dashboard', function() {
    this.resource('staff-list', function() {
      this.resource('staff', { path : ':staff_id' }, function() {
        this.route('new');
        this.route('edit');
        this.route('delete');
      });
    });
    this.resource('staff-roles');
    this.resource('staff-types');
    this.resource('profile-types');
  });

  this.resource('misc-dashboard', function() {
    this.resource('languages', function() {
      this.resource('language', { path : ':language_id' }, function() {
        this.route('new');
        this.route('edit');
        this.route('delete');        
      });
    });
    
    this.resource('countries', function() {
      this.resource('country', { path : ':country_id' }, function() {
        this.route('new');
        this.route('edit');
        this.route('delete');
      });
    });

    this.resource('confirmed-types', function() {
      this.resource('confirmed-type', { path : ':confirmed_type_id' }, function() {
        this.route('new');
        this.route('edit');
        this.route('delete');
      });
    });
  });

});

export default Router;
