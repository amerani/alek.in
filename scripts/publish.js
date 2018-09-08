const chalk = require("chalk");
const s3 = require("./publishS3");

(async function() {
    await s3();
})()
.catch(e => console.log(chalk.red(e)))