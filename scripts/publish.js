const chalk = require("chalk");
const s3 = require("./publishS3");
const lambda = require("./publishLambda");
const cloudFront = require("./updateCloudFront");
const invalidate = require("./invalidateDist");

(async function() {
    await s3();
    const arn = await lambda();
    await cloudFront(arn);
    await invalidate();

})()
.catch(e => console.log(chalk.red(e)))