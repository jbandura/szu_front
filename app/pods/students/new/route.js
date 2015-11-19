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
  }
});
