import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  label: null, //passed in
  collection: null, //passed in
  value: null, //passed in
  prompt: '---', //passed in

  options: computed('collection', 'value', function() {
    return this.get('collection').map((item) => {
      return {
        label: item.label,
        value: item.value,
        selected: (item.value === this.get('value'))
      };
    });
  }),

  actions: {
    optionSelected: function() {
      let selected_value = this.$('select option:selected').val();
      this.set('value', selected_value);
      this.sendAction('optionChosen', selected_value);
    }
  }

});
