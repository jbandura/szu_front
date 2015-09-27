import Ember from 'ember';

export default Ember.Controller.extend({
  presences: Ember.computed('model.presences', function(){
    return this.get('model').get('presences');
  })
});
