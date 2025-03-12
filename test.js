// Import the function sum from the app.js file
const {sum} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);

    // If 1 dollar is 167,455 yens, then 3.5 dollars should be (3.5 * 146.261682)
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.92); // 1 dollar is 146.261682 yens, then 3.5 dollars should be = (3.5 * 167.455)
})

test("One yen should be 0.00556 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(3.5);

    // If 1 yen is 0.00556 pounds, then 3.5 yens should be (3.5 * 0.00556)
    const expected = 3.5 * 0.00556; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.01946); // 1 yen is 0.00556 pounds, then 3.5 yens should be = (3.5 * 0.00556)
})