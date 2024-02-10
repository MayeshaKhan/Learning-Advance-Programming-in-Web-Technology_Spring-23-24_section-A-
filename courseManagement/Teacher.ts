import { Course } from "./Course";
import {Student} from "./Student"
export class Teacher {
    constructor(public name: string) {}

    createCourse(courseName: string): Course {
        return new Course(courseName);
    }

    viewStudentCourses(student: Student): Course[] {
        return student.getCourses();
    }
}
