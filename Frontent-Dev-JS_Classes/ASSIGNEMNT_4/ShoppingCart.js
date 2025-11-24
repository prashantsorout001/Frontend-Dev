class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((t, i) => t + i.price * i.qty, 0);
  }

  applyCoupon(code) {
    if (/^(SAVE|DISC)\d{2}$/.test(code)) {
      let percent = parseInt(code.match(/\d{2}/)[0]);
      return this.getTotal() - (this.getTotal() * percent) / 100;
    }
    return "Invalid coupon";
  }
}

const cart = new Cart();
cart.addItem("Shoes", 2000, 1);
cart.addItem("Watch", 1500, 2);

console.log(cart.getTotal());
console.log(cart.applyCoupon("SAVE20"));
