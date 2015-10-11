import Ember from 'ember';

const { Component, $, computed } = Ember;

export default Component.extend({
  weekdays: Ember.String.w("Mon Tue Wed Thu Fr"),
  property: null,
  required: false, //passed in
  valueChosen: computed('property', function(){
    return this.get('property');
  }),
  valid: true,

  actions: {
    weekdaySelected(target) {
      this.set('property', $(target).text());
    }
  }
});
