const palindromes = function (string) {
    let newString = string.replace(/[ ,.!]/g, "");
    newString =  newString.toLowerCase();
    const newStringArray = newString.split("");
    const reverseString = newStringArray.reverse().join("");

    return newString === reverseString;
};


// Do not edit below this line
module.exports = palindromes;
