import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model(){
    this.store.find('payment', { paid: false });
  }
});
