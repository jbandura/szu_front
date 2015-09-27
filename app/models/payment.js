/* global moment */
import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  month_nr: attr('number'),
  year_nr: attr('number'),
  paid: attr('boolean'),
  student: belongsTo('student', { async: true }),
  date: computed('month_nr', 'year_nr', function () {
    moment.locale('pl');
    let month = moment(new Date(this.get('month_nr').toString())).format('MMMM');
    return `${month} ${this.get('year_nr')}`;
  })
});
