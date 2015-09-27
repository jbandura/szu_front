import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    deleteGroup: function (group) {
      group.destroyRecord();
      return false;
    }
  }
});
