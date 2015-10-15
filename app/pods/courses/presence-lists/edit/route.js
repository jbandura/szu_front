import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      list: this.store.find('presence-list', params.presence_list_id),
      groups: this.store.findAll('student-group'),
      students: this.store.findAll('student'),
      courses: this.store.findAll('course'),
    });
  }
});
