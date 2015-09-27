import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      student: this.store.find('student', params.student_id),
      groups: this.store.findAll('student_group')
    });
  }
});
