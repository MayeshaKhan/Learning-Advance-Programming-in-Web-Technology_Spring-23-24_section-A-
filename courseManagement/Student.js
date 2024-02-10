"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.courses = [];
    }
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course);
    };
    Student.prototype.getCourses = function () {
        return this.courses;
    };
    return Student;
}());
exports.Student = Student;
