import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  fuzzyMatch: function(str, pattern) {
    pattern = pattern.split("").reduce((a,b) => {
      return `${a}.*${b}`;
    });
    return (new RegExp(pattern, 'i')).test(str);
  }
});
