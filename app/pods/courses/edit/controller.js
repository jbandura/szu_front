import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    save: function() {
      this.get('model.course').save().then(() => {
        this.transitionToRoute('courses.index');
      });
    }
  }
});
