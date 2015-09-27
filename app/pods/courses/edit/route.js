import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      course: this.store.find('course', params.course_id),
      groups: this.store.findAll('student-group')
    });
  }
});
