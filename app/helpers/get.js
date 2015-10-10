import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let obj = params[0],
      path = params[1];
  if(!obj) {
    return null;
  }

  return obj.get(`${path}`);

});
