import Ember from 'ember';
import FilterableMixin from 'szu-front/mixins/filterable';

const { Component, computed } = Ember;

export default Component.extend(FilterableMixin, {
  courses: null, //passed in
  students: null, //passed in
  list: null, //passed in
  groupId: null,

  isCourseSelectBlocked: computed.not('list.isNew'),
  
  options: computed('courses', function() {
    this.get('courses').map((course) => {
      return {
        label: course.get('name'),
        value: course.get('id')
      };
    });
  }),

  filteredStudents: computed('list.course', function() {

    if(!this.get('list.isNew')) {
      return this.get('list.presences');
    }

    let students = this.filterByProperty(
      this.students,
      'studentGroup.id',
      this.get('list.course.studentGroup.id')
    );
    let presences = [];
    students.forEach((student) => {
      presences.push({
        student: student,
        presenceList: null,
        isPresent: false
      });
    });

    return presences;
  }),

  actions: {
    saveList: function() {
      this.sendAction('saveList', {
        students: this.get('filteredStudents'),
        presenceList: this.get('list')
      });
    }
  }
});
