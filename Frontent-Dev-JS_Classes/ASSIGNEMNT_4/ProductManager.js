class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  details() {
    return `${this.name} - ₹${this.price}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Keyboard", 800, "Accessories")
];

products[0].applyDiscount(10);

const filtered = products.filter(p => p.price > 1000);
console.log(filtered.map(p => p.details()));
