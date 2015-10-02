import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('student-group');
  },

  deactivate() {
    let model = this.modelFor('student-groups/new');
    if ( model.get('isNew') ){
      model.destroyRecord();
    }
  }
});
