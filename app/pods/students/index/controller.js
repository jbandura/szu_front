import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  filterVisible: false,
  actions: {
    toggleFilter() {
      this.toggleProperty('filterVisible');
    },

    addTermsAccepted: function(student) {
      let flashMessage = Ember.get(this, 'flashMessages');
      student.set('acceptedTerms', true);
      student.save().then(() => {
        flashMessage.success('Pomyślnie dodano oddany regulamin!');
      });
    },

    deleteStudent: function(student) {
      let flashMessage = Ember.get(this, 'flashMessages');
      student.destroyRecord().then(() => {
        flashMessage.success('Student was successfully deleted.');
      });

      return false;
    },

    addPayment: function(student) {
      let flashMessage = Ember.get(this, 'flashMessages');
      let model = student.get('paymentCurrentMonth').set('paid', true);
      model.save().then(() => {
        this.set('flashMessage', 'Pomyślnie dodano wpłatę!');
        flashMessage.success('Payment was successfully added.');
      });
    }
  }
});
