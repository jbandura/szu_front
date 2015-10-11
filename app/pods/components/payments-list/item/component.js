import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  actions: {
    addPayment: function(payment) {
      this.attrs.addPayment(payment).then(() => {
        this.sendAction('paymentAdded');
      });
    },
    deletePayment: function() {
      this.attrs.deletePayment();
    }
  }
});
