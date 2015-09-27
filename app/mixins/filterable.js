import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  filter: null,
  filterByText: function (collection, propertyName) {
    let filter = this.get('filter');
    return collection.filter((model) => {
      return this.fuzzyMatch(model.get(propertyName), filter);
    });
  },

  filterByProperty: function (collection, propertyName, propertyValue) {
    return collection.filter((model) => {
      return model.get(propertyName) === propertyValue;
    });
  },

  fuzzyMatch: function (str, pattern) {
    pattern = pattern.split("").reduce((a,b) => {
      return `${a}.*${b}`;
    });
    return (new RegExp(pattern, 'i')).test(str);
  }
});
