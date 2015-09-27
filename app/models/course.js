import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;
const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  time: attr('string'),
  weekday: attr('string'),
  studentGroup: belongsTo('student-group', { async: true }),

  courseInfo: computed("time", "weekday", function() {
    return `${this.get('name')} (${this.get('weekday')} ${this.get('time')})`;
  })
});
