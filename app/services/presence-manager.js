/* global moment */
import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
  presenceLists: null,
  student: null,
  stats: {
    month: { present: 0, total: 0 },
    year: { present: 0, total: 0 },
    total: { present: 0, total: 0}
  },

  initialize(presenceLists, student) {
    this.set("presenceLists", presenceLists);
    this.set('student', student);
    this.set('stats', {
      month: { present: 0, total: 0 },
      year: { present: 0, total: 0 },
      total: { present: 0, total: 0}
    });
    this._calculate();
    return this;
  },

  getStats(timespan) {
    let amtTimespan = this.get(`stats.${timespan}.present`),
        amtTotal = this.get(`stats.${timespan}.total`),
        percentage = Math.round(amtTimespan/amtTotal * 100);

    return `${percentage}% (${amtTimespan}/${amtTotal})`;
  },

  _calculate() {
    this.get('presenceLists').forEach((list) => {
      let date = moment(list.get('date'));
      let presence = list.get('presences').find((presence) => {
        return presence.get('student.id') === this.get('student.id');
      });

      this._increaseStat('total.total');
      if(presence.get('isPresent')) {
        this._increaseStat('total.present');
      }
      if(date.year() === moment().year()){
        this._increaseStat('year.total');
        if(presence.get('isPresent')) {
          this._increaseStat('year.present');
        }
        if(date.month() === moment().month()) {
          this._increaseStat('month.total');
          if(presence.get('isPresent')) {
            this._increaseStat('month.present');
          }
        }
      }

    });
  },

  _increaseStat(name) {
    let stat = this.get(`stats.${name}`);
    this.set(`stats.${name}`, stat + 1);
  }

});
