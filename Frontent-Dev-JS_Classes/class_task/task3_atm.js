let balance = 5000;
let amount;

while (true) {
    amount = Number(prompt("Enter withdrawal amount:"));

    try {
        if (isNaN(amount)) {
            throw "Amount must be a number!";
        }

        if (amount % 100 !== 0) {
            throw "Amount must be divisible by 100!";
        }

        if (amount > balance) {
            throw "Insufficient balance!";
        }

        if (amount > 3000) {
            console.warn("High withdrawal alert!");
        }

        try {
            let test = amount.toUpperCase();
        } catch (typeError) {
            console.log("TypeError example triggered.");
        }

        balance -= amount;
        console.log("Withdrawal successful.");
        console.log("Remaining Balance:", balance);
        break;

    } catch (err) {
        console.log(err);
    }
}

console.log(hoistedVar);
var hoistedVar = "Hoisted with var";

try {
    console.log(hoistedLet);
    let hoistedLet = "Not hoisted";
} catch (e) {
    console.log("Error: let is not hoisted like var.");
}
