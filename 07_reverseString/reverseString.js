const reverseString = function(string) {
    //Takes in the a, converts to array and reforms a new string using chained methods
    const reverse = string
                            .split('')
                            .reverse()
                            .join('');
    
    console.log(reverse);
};

reverseString('HelloClint');

// Do not edit below this line
module.exports = reverseString;
