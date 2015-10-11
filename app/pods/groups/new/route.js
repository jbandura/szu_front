import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('student-group');
  },

  deactivate() {
    let model = this.modelFor('groups/new');
    if ( model.get('isNew') ){
      model.destroyRecord();
    }
  },

  actions: {
    addGroup(model) {
      const flashMessages = Ember.get(this, 'flashMessages');
      model.save().then(() => {
        this.transitionTo('groups.index');
        flashMessages.success('Group was saved successfully!');
      });
    },
    goBack() {
      this.transitionTo('groups.index');
    }
  }
});
