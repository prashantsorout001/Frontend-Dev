try {
    let price = Number(prompt("Enter product price:"));
    let qty = Number(prompt("Enter quantity:"));
    let deliveryNum = Number(prompt("Enter delivery day number (1-7):"));

    if (isNaN(price) || isNaN(qty)) {
        throw "Invalid input: Price or Quantity must be a number!";
    }

    if (deliveryNum < 1 || deliveryNum > 7) {
        throw "Invalid delivery day!";
    }

    let day;
    switch (deliveryNum) {
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        case 7: day = "Sunday"; break;
    }

    debugger;

    let total = 0;
    for (let i = 0; i < qty; i++) {
        total += price;
    }

    let discount = 0;

    if (total > 2000) {
        discount = total * 0.15;
    } else if (total >= 1000 && total <= 2000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    console.log("Price:", price);
    console.log("Quantity:", qty);
    console.log("Delivery Day:", day);
    console.log("Total Before Discount:", total);
    console.log("Discount Applied:", discount);
    console.log("Final Bill:", finalAmount);

} catch (e) {
    console.log(e);
}
