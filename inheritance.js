class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name}: ₹${this.price}`);
    }
}

class Electronic extends Products {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty; 
    }

    display() {
        super.display();
        console.log(`Warranty: ${this.warranty} years`);
    }
}

let Laptop = new Electronic('Laptop', 68000, 3);
let Mobile = new Electronic('Mobile', 22500, 1);

Laptop.display();
Mobile.display();
