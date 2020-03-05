function arrayMirroring(numberList) {
    const a = [...numberList];
    const b = numberList.reverse();
    return a.concat(b);
}

module.exports = arrayMirroring;