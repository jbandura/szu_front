import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      groups: this.store.findAll('student-group'),
      students: this.store.findAll('student'),
      courses: this.store.findAll('course')
    });
  },

  setupController(controller, models) {
    this._super(controller, models);
    controller.set('presenceList', this.store.createRecord('presence-list', {
      course: null
    }));
  },

  actions: {
    savePresences(data){
      let promises = [];
      let flashMessages = Ember.get(this, 'flashMessages');
      let students = data.students;
      let presenceList = data.presenceList;
      presenceList.save().then(() => {
        students.forEach((student) => {
          student.presenceList = presenceList;
          promises.push(
            this.store.createRecord('presence', student).save()
          );
        });
        return RSVP.all(promises).then(() => {
          flashMessages.success('Pomyślnie zapisano listę');
        });
      });
    }
  }
});
