import Ember from 'ember';
import EmberValidations from 'ember-validations';

const { Component, computed } = Ember;

export default Component.extend(EmberValidations, {
  model: null, //passed in
  isButtonDisabled: computed.not('isValid'),

  validations: {
    "model.name": {
      presence: true
    }
  },

  actions: {
    save() {
      this.sendAction('save', this.get('model'));
    },
    cancel() {
      this.sendAction('cancel');
    }
  }
});
