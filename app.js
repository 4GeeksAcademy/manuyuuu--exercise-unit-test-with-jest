const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro) {
   let dollar = euro * oneEuroIs.USD;
   return dollar;
}

function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return parseFloat(yen.toFixed(2));
}

function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return parseFloat(pound.toFixed(5));
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}