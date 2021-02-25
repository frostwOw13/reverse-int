module.exports = function reverse (num) {
    let str = String(num);
    if (String(num).includes('-')) {
        str = str.replace('-', '')
    }
    return Number(str.split('').reverse().join(''));
}
