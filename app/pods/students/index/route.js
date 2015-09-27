import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      students: this.store.findAll('student'),
      groups: this.store.findAll('student_group')
    });
  }
});
