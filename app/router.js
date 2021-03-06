import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

let AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function(){

  this.route('students', function() {
    this.route('new');
    this.route('show', { path: ':student_id' });
    this.route('edit', { path: ':student_id/edit' });
    this.route('payments', function() {
      this.route('overdue');
    });
    this.route('groups', function() {
      this.route('new');
      this.route('edit', { path: ':student_group_id/edit' });
    });
  });


  this.route('courses', function() {
    this.route('new');
    this.route('edit', { path: ':course_id/edit' });

    this.route('presence-lists', function() {
      this.route('new');
      this.route('show', { path: ':presence_list_id' }, function() {
        this.route('presences');
      });
      this.route('edit', { path: ':presence_list_id/edit' });
    });
  });
});

export default AppRouter;
