const removeFromArray = function(arr, ...arg) {
    const newArray = [];

    arr.forEach(item => {
        if (!arg.includes(item)) {
            newArray.push(item)
        }
        
    });
return newArray;
};




removeFromArray([1, 2, 3], '1', 3);

// Do not edit below this line
module.exports = removeFromArray;
