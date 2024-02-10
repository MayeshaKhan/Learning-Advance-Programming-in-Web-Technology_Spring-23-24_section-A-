"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teacher_1 = require("./Teacher");
var Student_1 = require("./Student");
// Create instances of teacher, student, and course
var teacher = new Teacher_1.Teacher("Mr. Smith");
var student = new Student_1.Student("Alice");
var course = teacher.createCourse("Math");
// Teacher creates a course
console.log("".concat(teacher.name, " created a course: ").concat(course.name));
// Student enrolls in the course
student.enrollCourse(course);
console.log("".concat(student.name, " enrolled in the course: ").concat(course.name));
// Teacher views the courses of a student
var studentCourses = teacher.viewStudentCourses(student);
console.log("".concat(teacher.name, " views the courses of ").concat(student.name, ":"), studentCourses.map(function (course) { return course.name; }));
