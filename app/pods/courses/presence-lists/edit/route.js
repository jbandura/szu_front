import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      list: this.store.find('presence-list', params.presence_list_id),
      groups: this.store.findAll('student-group'),
      students: this.store.findAll('student'),
      courses: this.store.findAll('course'),
    });
  },

  actions: {
    savePresences(data) {
      let presenceList = data.presenceList;
      let students = data.students;
      let flashMessages = Ember.get(this, 'flashMessages');
      let promises = [];

      presenceList.save().then(() => {
        students.forEach((student) => {
          promises.push(student.save());
        });
      });

      return RSVP.all(promises).then(() => {
        this.transitionTo('courses.presence-lists.index');
        flashMessages.success('Pomyślnie zapisano listę');
      });
    }
  }
});
