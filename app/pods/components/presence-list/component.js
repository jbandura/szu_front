import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  presences: null, //passed in

  present: computed('presences', function() {
    return this.get('presences').filterBy('isPresent');
  }),
  absent: computed('presences', function() {
    return this.get('presences').filterBy('isPresent', false);
  })
});
