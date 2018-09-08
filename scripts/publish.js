const chalk = require("chalk");
const s3 = require("./publishS3");
const lambda = require("./publishLambda");
const cloudFront = require("./updateCloudFront");

(async function() {
    await s3();
    const arn = await lambda();
    await cloudFront(arn);

})()
.catch(e => console.log(chalk.red(e)))