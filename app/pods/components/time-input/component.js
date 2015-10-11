import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  valueChosen: computed('property', function() {
    return this.get('property') !== undefined;
  }),

  valid: computed('valueChosen', 'property', function() {
    return this.get('valueChosen') && (this.get('property') !== '');
  })
});
