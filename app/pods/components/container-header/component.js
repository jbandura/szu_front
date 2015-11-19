import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  filterable: true, //passed in

  actions: {
    toggleFilter() {
      this.attrs.showFilter();
    }
  }
});
