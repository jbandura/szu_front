import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(){
    return RSVP.hash({
      student: this.store.createRecord('student'),
      groups: this.store.findAll('student_group')
    });
  },

  deactivate() {
    let model = this.modelFor('students/new').student;
    if(model.get('isNew')) {
      model.destroyRecord();
    }
  },

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
