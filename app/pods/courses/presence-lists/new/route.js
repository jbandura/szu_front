import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      groups: this.store.findAll('student-group'),
      students: this.store.findAll('student'),
      courses: this.store.findAll('course'),
      list: this.store.createRecord('presence-list', { course: null })
    });
  },

  deactivate() {
    let model = this.modelFor('courses/presence-lists/new').list;
    if(model.get('isNew')) {
      model.destroyRecord();
    }
  },

  actions: {
    savePresences(data){
      let promises = [];
      let flashMessages = Ember.get(this, 'flashMessages');
      let students = data.students;
      let presenceList = data.presenceList;
      presenceList.save().then(() => {
        students.forEach((presence) => {
          presence.set('presenceList', presenceList);
          promises.push(
            this.store.createRecord('presence', presence.getProperties('student', 'isPresent', 'presenceList')).save()
          );
        });
        return RSVP.all(promises).then(() => {
          this.transitionTo('courses.presence-lists.index');
          flashMessages.success('Pomyślnie zapisano listę');
        });
      });
    }
  }
});
