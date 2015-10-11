import Ember from 'ember';
import EmberValidations from 'ember-validations';

const { Component, computed } = Ember;

export default Component.extend(EmberValidations, {
  course: null, //passed in
  groups: null, //passed in
  groupChosen: computed('course.studentGroup', function() {
    return this.get('course.studentGroup');
  }),
  isButtonDisabled: computed('isValid', 'groupChosen', function() {
    return !this.get('isValid') || !this.get('groupChosen');
  }),

  validations: {
    "course.name": {
      presence: true
    },
    "course.time": {
      presence: true
    }
  },

  actions: {
    save: function() {
      this.sendAction('action', this.get('course'));
    }
  }
});
