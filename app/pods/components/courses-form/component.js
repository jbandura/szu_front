import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  course: null, //passed in
  groups: null, //passed in
  actions: {
    save: function() {
      console.log('saving...');
      this.sendAction('action', this.get('course'));
    }
  }
});
