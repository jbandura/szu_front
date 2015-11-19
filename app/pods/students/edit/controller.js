import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
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
