import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    addPayment(payment) {
      payment.set("paid", true);
      return payment.save();
    },
    deletePayment() {
      console.log('deleting');
    }
  }
});
