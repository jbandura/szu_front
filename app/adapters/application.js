import DS from 'ember-data';

const { ActiveModelAdapter } = DS;

export default ActiveModelAdapter.extend({
  namespace: 'api/v1'
});
