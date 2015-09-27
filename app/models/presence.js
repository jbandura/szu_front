import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  student: belongsTo('student', { async: true }),
  isPresent: attr('boolean'),
  presenceList: belongsTo('presence-list', { async: true }),
});
