import Ember from 'ember';
import FilterableMixin from '../../../mixins/filterable';

const { Component, computed } = Ember;

export default Component.extend(FilterableMixin, {
  students: [], //passed in
  groups: [], //passed in
  selectedGroup: 'all',
  terms: false,
  filteredStudents: computed("students.@each", "filter", "terms", "selectedGroup", function () {
    let students = this.get('students');
    let filter = this.get('filter');
    let terms = this.get('terms');
    let selectedGroup = this.get('selectedGroup');

    if(!filter && !terms && selectedGroup === 'all') {
      return students;
    }

    if(filter) {
      students = this.filterByText(students, 'fullName');
    }
    if(terms) {
      students = this.filterByProperty(students, 'acceptedTerms', false);
    }
    if(selectedGroup !== 'all') {
      students = this.filterByProperty(students, 'studentGroup.id', this.get('selectedGroup'));
    }

    return students;
  }),

  actions: {
    addTermsAccepted: function(student) {
      let flashMessage = Ember.get(this, 'flashMessages');
      student.set('acceptedTerms', true);
      student.save().then(() => {
        flashMessage.success('Pomyślnie dodano oddany regulamin!');
      });
    },

    deleteStudent: function(student) {
      student.destroyRecord();
      return false;
    },

    groupSelected: function() {
      let selectedGroup = this.$('select').val();
      this.set('selectedGroup', selectedGroup);
    },

    addPayment: function(student) {
      let model = student.get('paymentCurrentMonth').set('paid', true);
      model.save().then(() => {
        this.set('flashMessage', 'Pomyślnie dodano wpłatę!');
      });
    }
  }
});
