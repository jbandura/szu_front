import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    delete: function (course) {
      course.destroyRecord();
    }
  }
});
