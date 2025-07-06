const repeatString = function(string, num) {
    //array to store repetitions of the stringRepeat
    const arr = [];

    //loop populates arr. Iterating according to numRepeat
    for (let i = 0; i < num; i++) {
        arr.push(string);
    }
    //Finalizes populated array into a joined string and logs its value
    const finalString = arr.join('');
    console.log(finalString);
};

//String and iteration value options
const numRepeat = 5;
const stringRepeat = 'Hello';

repeatString(stringRepeat, numRepeat);

// Do not edit below this line
module.exports = repeatString;
