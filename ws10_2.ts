class CPU {
    constructor(public brand: string, public cores: number) {}

    process(): void {
        console.log(`CPU ${this.brand} จำนวน ${this.cores} Cores กำลังประมวลผล`);
    }

    showInfo(): void {
        console.log(`CPU Info: brand - ${this.brand}, จำนวนคอร์ - ${this.cores}`);
    }
}

class RAM {
    constructor(public capacity: number) {}

    load(): void {
        console.log(`RAM ขนาด ${this.capacity} GB กำลังโหลดข้อมูล`);
    }

    showInfo(): void {
        console.log(`RAM Info: ความจุ - ${this.capacity} GB`);
    }
}

class Storage {
    constructor(public capacity: number, public type: string) {}

    readData(): void {
        console.log(`Storage ชนิด ${this.type} ขนาด ${this.capacity} GB กำลังอ่านข้อมูล`);
    }

    showInfo(): void {
        console.log(`Storage Info: ชนิด - ${this.type}, ความจุ - ${this.capacity} GB`);
    }
}

class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage;
    constructor(
        brand: string,
        cores: number,
        ramCapacity: number,
        storageCapacity: number,
        storageType: string
    ) {
        this.cpu = new CPU(brand, cores);
        this.ram = new RAM(ramCapacity);
        this.storage = new Storage(storageCapacity, storageType);
    }

    boot(): void {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("ระบบคอมพิวเตอร์พร้อมใช้งานแล้ว!");
    }

    showComputerInfo(): void {
        console.log("Computer Information:");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}

const myComputer = new Computer("Intel", 8, 16, 512, "SSD");
myComputer.boot();
myComputer.showComputerInfo();