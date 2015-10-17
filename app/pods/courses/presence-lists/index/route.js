import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('presence-list');
  },

  actions: {
    deleteList(list) {
      let flashMessages = Ember.get(this, 'flashMessages');
      list.destroyRecord().then( () => {
        flashMessages.success('Presence list was successfully deleted.');
      });
    }
  }
});
