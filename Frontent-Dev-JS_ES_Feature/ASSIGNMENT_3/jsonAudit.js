const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];

rawData.forEach((entry, index) => {
    try {
        const parsed = JSON.parse(entry);
        if (!parsed.user || !parsed.age) throw new Error("Missing key");
        parsed.age = Number(parsed.age);
        if (parsed.age >= 18) cleanData.push(parsed);
    } catch (err) {
        console.log(`Error in line ${index + 1}: ${err.message}`);
    }
});

console.log(cleanData);

