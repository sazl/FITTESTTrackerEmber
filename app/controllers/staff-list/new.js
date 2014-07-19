import Ember from 'ember';

var StaffNewController = Ember.ObjectController.extend(Ember.Validations.Mixin);
StaffNewController.reopen({
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  title: null,
  mobile: null,
  thuraya: null,
  staffColorCode: null,
  staffType: null,
  profileType: null,
  nationality: null,
  language: null,
  staffRole: null,

  staffTypes: [],
  profileTypes: [],
  nationalitites: [],
  languages: [],
  staffRoles: [],

  actions: {
    createStaff: function() {

    }
  },
  
  validations: {
    firstName: {
      presence: true
    },
    lastName: {
      presence: true
    },
    dateOfBirth: {},
    title: {},
    mobile: {},
    thuraya: {},
    staffColorCode: {},
    staffType: {

    },
    profileType: {

    },
    nationality: {},
    language: {},
    staffRole: {}
  }
});

export default StaffNewController;
