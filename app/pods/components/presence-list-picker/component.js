import Ember from 'ember';
import FilterableMixin from '../../../mixins/filterable';

const { Component, computed } = Ember;

export default Component.extend(FilterableMixin, {
  courses: null, //passed in
  students: null, //passed in
  list: null, //passed in
  groupId: null,

  options: computed('courses', function() {
    this.get('courses').map((course) => {
      return {
        label: course.get('name'),
        value: course.get('id')
      };
    });
  }),

  filteredStudents: computed('list.course', function() {
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
    courseSelected: function(course_id) {
      let course = this.get('courses').findBy('id', course_id.toString());
      this.set('list.course', course);
      if(course_id === "0"){
        this.$('.js-students-list').addClass('hide');
      } else {
        this.$('.js-students-list').removeClass('hide');
      }
      this.set('groupId', course_id);
    },

    saveList: function() {
      this.sendAction('saveList', {
        students: this.get('filteredStudents'),
        presenceList: this.get('list')
      });
    }
  }
});
