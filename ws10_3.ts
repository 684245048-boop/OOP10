class Product{
    constructor(public name:string, public price: number, public quantity: number){}
    getSubtotal(): number {
        return this.price * this.quantity;
    }
}

class Order{
    private products: Product[] = [];
    addProduct(product: Product): void{
        this.products.push(product);
        console.log(`${product.name}: ${product.price} X ${product.quantity}ชิ้น = ${product.getSubtotal()}บาท`);
    }
    calculateTotal(): number {
        let total = 0;
        for (const product of this.products) {
            total += product.getSubtotal();
        }
        return total;
    }
    calculateDiscount(percent: number): number {
        return (this.calculateTotal() * percent) / 100;
    }
    calculateNetTotal(percent: number): number {
        return this.calculateTotal() - this.calculateDiscount(percent);
    }
}

const order = new Order();
const prod1 = new Product("Laptop",25000,2);
const prod2 = new Product("Mouse",200,10);
const prod3 = new Product("Sanner",12000,3);

order.addProduct(prod1);
order.addProduct(prod2);
order.addProduct(prod3);
order.calculateTotal();
const disc = 10;
console.log(`รวมเงินทั้งหมด ${order.calculateTotal()}บาท`);
console.log(`ส่วนลด ${disc}% เป็นเงิน ${order.calculateDiscount(disc)}`);
console.log(`ชำระเงินสุทธิ ${order.calculateNetTotal(disc)}บาท`);