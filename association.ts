class Student {
    constructor(private name: string, private major: string) {}
    getStudentInfo(): string {
        return `นักศึกษา ชื่อ ${this.name} สาขา ${this.major}`;
    }
}

class Teacher {
    constructor(private name: string, private faculty: string) {}
    teach(student: Student): void {
        console.log(`อาจารย์ ${this.name} คณะ ${this.faculty} สอน ${student.getStudentInfo()}`);
    }
}

const s1 = new Student("พงศศักดิ์", "คอมพิวเตอร์");
const s2 = new Student("คมศร", "วิทยาศาสตร์");
const t1 = new Teacher("พงศศักดิ์", "เทคโนโลยี");
t1.teach(s1);
t1.teach(s2);