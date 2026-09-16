class Patient {
    constructor(public patientId: string,public name: string,public age: number) {}
    getPatientInfo(): string {
        return `Patient ID: ${this.patientId}, Name: ${this.name}, Age: ${this.age}`;
    }

    showInfo(): void {
        console.log(this.getPatientInfo());
    }
}

class Doctor {
    constructor(public doctorId: string,public name: string,public specialty: string) {}

    showInfo(): void {
        console.log(`Doctor: ${this.name} Speciality: ${this.specialty}`);
    }

    examine(pt: Patient): void {
        console.log(`Doctor: ${this.name} Speciality: ${this.specialty}`);
        console.log("is examining");
        pt.showInfo();
    }

    diagnose(pt: Patient, dis: string): void {
        console.log(`Doctor: ${this.name} has diagnosed ${pt.getPatientInfo()} with ${dis}.`);
    }

    prescribeMedicine(pt: Patient, med: string): void {
        console.log(`Doctor: ${this.name} has prescribed ${med} to ${pt.getPatientInfo()}.`);
    }

    calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
        const total = fee + medFee;
        console.log(`Doctor: ${this.name} has calculated the treatment cost for ${pt.getPatientInfo()}.`);
        console.log(`Total cost: ${total}`);
    }
}

const patient1 = new Patient("P001", "แก้วตา", 30);
const patient2 = new Patient("P002", "สำราญ", 25);
const doctor1 = new Doctor("D001", "วชิระ", "หัวใจ");
const doctor2 = new Doctor("D002", "อภิญญา", "จักษุ");

doctor1.diagnose(patient1, "หัวใจ");
doctor2.diagnose(patient2, "ซึมเศร้า");

doctor1.prescribeMedicine(patient1, "ยาลดความดัน");
doctor2.prescribeMedicine(patient2, "ยาคลายเครียด");

doctor1.calculateTreatmentCost(patient1, 500, 200);
doctor2.calculateTreatmentCost(patient2, 300, 150);