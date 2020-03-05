const isLeapYear = (tahun) => {
        const isLeapYear = tahun % 4 === 0 && tahun % 100 !== 0 || tahun % 400 === 0
        return isLeapYear ? true : false
};

module.exports = isLeapYear;