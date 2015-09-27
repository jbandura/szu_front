import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    save() {
      this.get('model.student').save().then((student) => {
        this.transitionToRoute('students.show', student);
      });
    },

    cancel() {
      this.transitionToRoute('students.show', this.get('model'));
      return false;
    }
  }
});
