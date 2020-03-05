function symmetrical(value) {
    let x = value;
    if(typeof(value) == 'number'){
        x = value + '';
    }
    const a = [...x].join();
    const b = [...x].reverse().join();
    
    return a === b;
}

module.exports = symmetrical;