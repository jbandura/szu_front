import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  student: null, //passed in
  store: inject.service('store'),
  presenceManager: inject.service('presence-manager'),
  isLoaded: false,

  didInsertElement() {
    this._loadData().then((presenceList) => {
      this._populateStats(presenceList);
      this.set('isLoaded', true);
    });
  },

  _populateStats(presenceList) {
    let manager = this.get('presenceManager').initialize(presenceList, this.get('student'));
    this.set('presencesThisMonth', manager.getStats('month'));
    this.set('presencesThisYear', manager.getStats('year'));
    this.set('presencesTotal', manager.getStats('total'));
  },

  _loadData() {
    return this.get('store').find('presence-list', { student: this.get('student.id') });
  }
});
