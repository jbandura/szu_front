import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      student: this.store.find('student', params.student_id),
      groups: this.store.findAll('student_group')
    });
  },

  actions: {
    saveChanges(student) {
      const flashMessages = Ember.get(this, 'flashMessages');
      student.save().then((student) => {
        this.transitionTo('students.show', student);
        flashMessages.success('Student was successfully edited');
      });
    },
    goBack() {
      this.transitionTo('students.index');
      return false;
    }
  }
});
