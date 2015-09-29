/* global moment */
import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;
const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  surname: attr('string'),
  street: attr('string'),
  city: attr('string'),
  country: attr('string'),
  phone_nr: attr('string'),
  acceptedTerms: attr('boolean'),

  studentGroup: belongsTo('student-group', { async: true }),
  payments: hasMany('payment', { async: true }),

  fullName: computed("name", "surname", function() {
    return `${this.get('name')} ${this.get('surname')}`;
  }),

  address: computed("street", "city", "country", function() {
    let country = (this.get('country') !== 'Polska') ? this.get('country') : '';
    return `${this.get('street')}, ${this.get('city')} ${country}`;
  }),

  paymentCurrentMonth: computed("payments.@each.month_nr", "payments.@each.year_nr", function() {
    let month_nr = parseInt(moment().format('M'));
    let year_nr = parseInt(moment().format('YYYY'));
    return this.get('payments').find((payment) => {
      return payment.get('month_nr') === month_nr && payment.get('year_nr') === year_nr;
    });
  })
});
