import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  filterVisible: false,
  actions: {
    toggleFilter() {
      this.toggleProperty('filterVisible');
    },

    addPayment(payment) {
      payment.set("paid", true);
      return payment.save();
    },
    deletePayment() {
      console.log('deleting');
    }
  }
});
