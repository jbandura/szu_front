import Ember from 'ember';
import FilterableMixin from '../../../mixins/filterable';

const { Controller, computed } = Ember;

export default Controller.extend(FilterableMixin, {
  changedPayment: false,
  filteredPayments: computed('filter', 'changedPayment', function() {
    let payments = this.get('model');
    let changedPayment = this.get('changedPayment');
    let filter = this.get('filter');
    if( !filter && !changedPayment ) {
      return payments;
    }
    if(changedPayment) {
      return payments = this.filterByProperty(payments, 'paid', false);
    }
    payments = this.filterByText(payments, 'student.fullName');
  }),

  actions: {
    addPayment: function(payment) {
      payment.set("paid", true);
      payment.save().then(() => {
        this.set('changedPayment', true);
      });
    },
    deletePayment: function() {
      console.log('deleting');
    }
  }
});
