import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    createStudent(student) {
      const flashMessages = Ember.get(this, 'flashMessages');

      student.save().then(() => {
        this.transitionTo('students.index');
        flashMessages.success('Student was successfully saved!');
      });
    },

    goBack() {
      this.transitionTo('students.index');
    }
  }
});
