import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      list: this.store.find('presence-list', params.presence_list_id),
      positions: this.store.find('presence', { list_id: params.presence_list_id })
    });
  }
});
