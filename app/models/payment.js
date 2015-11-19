/* global moment */
import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  monthNr: attr('number'),
  yearNr: attr('number'),
  paid: attr('boolean'),
  student: belongsTo('student', { async: true }),
  date: computed('monthNr', 'yearNr', function () {
    let month = moment(new Date(this.get('monthNr').toString())).format('MMMM');
    return `${month} ${this.get('yearNr')}`;
  })
});
