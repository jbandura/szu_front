import Ember from 'ember';

const { Controller, computed, $ } = Ember;

export default Controller.extend({
  overduePaymentsCount: computed('model.@each.paid', function() {
    return this.get('model.length');
  }),

  setCurrentPage(page) {
    $('.js-pages').removeClass('active');
    $(`.js-${page}`).addClass('active');
  },

  actions: {
    goToUsers() {
      this.transitionToRoute('students.index');
      this.setCurrentPage('students');
    },
    goToPayments() {
      this.transitionToRoute('students.paymentsoverdue');
      this.setCurrentPage('payments');
    }
  }
});
