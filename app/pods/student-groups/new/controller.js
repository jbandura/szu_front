import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  isValid: computed('model.name', function() {
    return !Ember.isEmpty(this.get('model.name'));
  }),

  actions: {
    saveGroup() {
      if(this.get('isValid')){
        this.get('model').save().then(() => {
          this.transitionToRoute("student-groups.index");
        });
      } else {
        this.set('errorMessage', 'Wypełnij wszstkie pola!');
      }
    }
  }

});
