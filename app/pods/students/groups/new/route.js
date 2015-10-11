import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('student-group');
  },

  deactivate() {
    let model = this.modelFor('students/groups/new');
    if ( model.get('isNew') ){
      model.destroyRecord();
    }
  },

  actions: {
    addGroup(model) {
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
