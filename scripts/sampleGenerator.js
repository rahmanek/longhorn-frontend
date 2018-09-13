fs = require('fs');

var names = []

var names = fs.readFileSync("./data/names.csv",'utf8').split("\n")
console.log(names)
