class Engine {
    constructor(public type: string) {}

    start(): void {
        console.log(`เครื่องยนต์ ${this.type} เริ่มทำงานแล้ว`);
    }

    stop(): void {
        console.log(`เครื่องยนต์ ${this.type} หยุดทำงานแล้ว`);
    }
}

class Battery {
    constructor(public capacity: number) {}

    charge(): void {
        console.log(`แบตเตอรี่ ${this.capacity} mAh กำลังชาร์จ...`);

        this.capacity = 100;

        console.log(
            `ชาร์จแบตเตอรี่เรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}%`
        );
    }

    showStatus(): string {
        return `ขณะนี้แบตเตอรี่เหลืออยู่ ${this.capacity} mAh`;
    }
}

class Car {
    private engine: Engine;
    private battery: Battery;

    constructor(engineType: string, batteryCapacity: number) {
        this.engine = new Engine(engineType);
        this.battery = new Battery(batteryCapacity);
    }

    startCar(): void {
        this.engine.start();
    }

    stopCar(): void {
        this.engine.stop();
    }

    showCarInfo(): void {
        console.log(`ข้อมูลรถยนต์: เครื่องยนต์ชนิด ${this.engine.type}`);
        console.log(`สถานะแบตเตอรี่: ${this.battery.showStatus()}`);
    }

    chargeBattery(): void {
        this.battery.charge();
    }
}

const car1 = new Car("V6", 20);

car1.startCar();
car1.showCarInfo();
car1.chargeBattery();
car1.stopCar();