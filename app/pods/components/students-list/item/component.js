import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  student: null, //passed in

  actions: {
    addPayment(student) {
      this.attrs.addPayment(student);
    },

    deleteStudent(student) {
      this.attrs.deleteStudent(student);
    },

    addTermsAccepted(student) {
      this.attrs.addTermsAccepted(student);
    }
  }
});
