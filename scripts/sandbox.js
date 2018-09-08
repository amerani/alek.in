const fs = require("fs-jetpack");
const path = require("path");

const files = fs.find(path.resolve(__dirname, '..', 'dist'), { matching: "*" })
console.log(files)
console.log(files.map(x => x.replace('dist/', '')))