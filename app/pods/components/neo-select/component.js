import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  property: null, //passed in
  collection: null, //passed in
  valuePath: null, //passed in
  labelPath: null, //passed in
  prompt: '-- select --',
  valid: null,
  valueChosen: false,
  validations: null,

  validate(value) {
    if(!this.get('validations')) {
      return true;
    }

    if(this.get('validations') === 'required') {
      return parseInt(value) !== 0;
    }
  },

  actions: {
    setProperty(id) {
      this.set('valid', this.validate(id));
      this.set('valueChosen', true);
      let item = this.get('collection').findBy(this.get('valuePath'), id);
      this.set('property', item);
    }
  }
});
