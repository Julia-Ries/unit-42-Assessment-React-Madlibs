function addCommas(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(addCommas(1234))
console.log(addCommas(9876543210))
console.log(addCommas(6))
console.log(addCommas(9876543210))
console.log(addCommas(-64321))
console.log(addCommas(-5678))



module.exports = addCommas;