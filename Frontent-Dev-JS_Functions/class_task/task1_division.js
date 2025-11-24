function divide(a, b) {
    try {
        if (b === 0) {
            throw "Custom Error: Cannot divide by zero!";
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.log(error);
    }
}

divide(10, 2);
divide(5, 0);
