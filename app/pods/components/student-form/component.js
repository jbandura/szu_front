import Ember from 'ember';
import EmberValidations from 'ember-validations';

const { Component, computed } = Ember;

export default Component.extend(EmberValidations, {
  model: null, //passed in
  groups: null, //passed in
  studentGroup: computed.alias('model.studentGroup'),
  groupChosen: computed('model.studentGroup', function() {
    return this.get('studentGroup');
  }),
  isButtonDisabled: computed('isValid', 'groupChosen', function() {
    return !this.get('isValid') || !this.get('groupChosen');
  }),

  validations: {
    "model.name": {
      presence: true
    },
    "model.surname": {
      presence: true
    },
    "model.studentGroup": {
      presence: true
    }
  },

  actions: {
    save() {
      this.attrs.save(this.get('model'));
    },
    cancel() {
      this.attrs.cancel();
    }
  }
});
