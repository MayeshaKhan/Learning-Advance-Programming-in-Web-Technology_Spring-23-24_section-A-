"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Course_1 = require("./Course");
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.createCourse = function (courseName) {
        return new Course_1.Course(courseName);
    };
    Teacher.prototype.viewStudentCourses = function (student) {
        return student.getCourses();
    };
    return Teacher;
}());
exports.Teacher = Teacher;
