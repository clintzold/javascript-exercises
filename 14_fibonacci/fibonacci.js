

const fibonacci = function(num) {
    let sequence = [0, 1];
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 1; i < num ; i++) {
            let fillSequence = sequence[i - 1] + sequence[i];
            sequence.push(fillSequence);
        };
        return sequence[num];
    };
};


// Do not edit below this line
module.exports = fibonacci;
