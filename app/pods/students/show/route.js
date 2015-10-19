import Ember from 'ember';

const { Route, RSVP, inject } = Ember;

export default Route.extend({
  presenceManager: inject.service('presence-manager'),
  model(params) {
    return this.store.find('student', params.student_id);
  }
});
