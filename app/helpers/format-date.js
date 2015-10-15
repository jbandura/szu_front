/* global moment  */
import Ember from 'ember';

export function formatDate(date, options) {
  options.format = options.format || "DD.MM.YYYY";
  options.fromNow = options.fromNow || false;
  let parsed = moment(date[0]);
  if (parsed.isValid()) {
    if(options.fromNow) {
      return parsed.fromNow();
    }
    return parsed.format(options.format);
  } else {
    return date[0];
  }
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
