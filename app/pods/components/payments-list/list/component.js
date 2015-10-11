import Ember from 'ember';
import FilterableMixin from '../../../../mixins/filterable';

const { Component, computed } = Ember;

export default Component.extend(FilterableMixin, {
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
    return this.filterByText(payments, 'student.fullName');
  }),

  actions: {
    paymentAdded() {
      this.set('changedPayment', true);
    }
  }
});
