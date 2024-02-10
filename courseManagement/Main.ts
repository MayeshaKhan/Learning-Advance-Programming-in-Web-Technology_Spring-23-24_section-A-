import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Course } from "./Course";

// Create instances of teacher, student, and course
const teacher = new Teacher("Mr. Smith");
const student = new Student("Alice");
const course = teacher.createCourse("Math");

// Teacher creates a course
console.log(`${teacher.name} created a course: ${course.name}`);

// Student enrolls in the course
student.enrollCourse(course);
console.log(`${student.name} enrolled in the course: ${course.name}`);

// Teacher views the courses of a student
const studentCourses = teacher.viewStudentCourses(student);
console.log(`${teacher.name} views the courses of ${student.name}:`, studentCourses.map(course => course.name));
