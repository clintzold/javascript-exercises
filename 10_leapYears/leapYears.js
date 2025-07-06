const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 != 0) {
        console.log(`The year ${year} is a NOT leap year!`);
    } else if (year % 4 === 0) {
        console.log(`The year ${year} is a leap year!`);
    };
};

leapYears(1600);
// Do not edit below this line
module.exports = leapYears;
