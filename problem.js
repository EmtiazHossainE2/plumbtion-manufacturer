const myProducts = [
    {name : "Final cut pro" , price : 500 , brand: "abc" , description: "In Factory Plus Chemical Research is a peer reviewed scientific journal."},
    {name : "Long Shift" , price : 400 , brand: "bcd" , description: "In Factory Plus Chemical Research is a peer reviewed scientific journal."},
    {name : "Long Shift 2" , price : 300 , brand: "cde" , description: "In Factory Plus Chemical Research is a peer reviewed scientific journal."},
    {name : "Final cut Pro 2" , price : 200 , brand: "def" , description: "In Factory Plus Chemical Research is a peer reviewed scientific journal."},
]
const input = 'final cut'

const output = myProducts.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))

console.log(output);