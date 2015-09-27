import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  isValid: computed('model.student.name', 'model.student.surname', 'model.student.street', function() {
    return !Ember.isEmpty(this.get('model.student.name')) &&
      !Ember.isEmpty(this.get('model.student.surname')) &&
      !Ember.isEmpty(this.get('model.student.street'));
  }),

  actions: {
    save() {
      if ( this.get('isValid') ){
        this.get('model.student').save().then(() => {
          this.transitionToRoute('students.index');
        });
      } else {
        this.set('errorMessage', 'Wypełnij wszystkie pola!');
      }

      return false;
    },

    cancel() {
      this.transitionToRoute('students.index');
    }
  }
});
