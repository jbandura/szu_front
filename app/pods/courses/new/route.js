import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model: function () {
    return Ember.RSVP.hash({
      course: this.store.createRecord('course'),
      groups: this.store.findAll('student_group'),
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('course', model.course);
    controller.set('groups', model.groups);
  },

  deactivate: function() {
    let model = this.modelFor('courses/new').course;
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

  actions: {
    saveCourse: function(course) {
      console.log(course);
      course.save().then(() => {
        this.transitionTo('courses.index');
      });
    }
  }
});
