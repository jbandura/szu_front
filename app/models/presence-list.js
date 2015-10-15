import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany }  = DS;
const { computed }  = Ember;

export default Model.extend({
  date: attr('date'),
  course: belongsTo('course', { async: true }),
  presences: hasMany('presence', { async: true }),

  presentStudents: computed('presences', function() {
    return this.get('presences').filterBy('isPresent');
  }),

  absentStudents: computed('presences', function() {
    return this.get('presences').filterBy('isPresent', false);
  })
});
