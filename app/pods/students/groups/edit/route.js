import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.find('student-group', params.student_group_id);
  },

  actions: {
    saveChanges(model) {
      const flashMessages = Ember.get(this, 'flashMessages');
      model.save().then(() => {
        this.transitionTo('students.groups.index');
        flashMessages.success('Group was saved successfully!');
      });
    },
    goBack() {
      this.transitionTo('students.groups.index');
    }
  }
});
