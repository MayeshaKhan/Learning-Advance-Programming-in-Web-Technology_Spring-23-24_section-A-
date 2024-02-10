import { Teacher } from "./Teacher";
//import { Student } from "./Student";
import { Course } from "./Course";

export class Student {
    private courses: Course[] = [];

    constructor(public name: string) {}

    enrollCourse(course: Course): void {
        this.courses.push(course);
    }

    getCourses(): Course[] {
        return this.courses;
    }
}
