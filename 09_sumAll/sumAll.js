const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    const newMin = Math.min(min, max);
    const newMax = Math.max(min, max);

    let sum = 0;
    for (let i = newMin; i <= newMax; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
