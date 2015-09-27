import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

let AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function(){

  this.resource('students', function() {
    this.route('new');
    this.route('show', { path: ':student_id' });
    this.route('edit', { path: ':student_id/edit' });
    this.resource('payments', function() {
      this.route('overdue');
    });
  });

  this.resource('student-groups', function() {
    this.route('new');
    this.route('edit', { path: ':student_group_id/edit' });
  });

  this.resource('courses', function() {
    this.route('new');
    this.route('edit', { path: ':course_id/edit' });
  });

  this.route('courses/new');
  this.route('courses/edit');

  this.resource('presence-lists', function() {
    this.route('new');
    this.route('show', { path: ':presence_list_id' }, function() {
      this.route('presences');
    });
  });
});

export default AppRouter;
