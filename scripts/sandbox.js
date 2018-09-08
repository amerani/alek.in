const AWS = require("./aws");

const CloudFront = new AWS.CloudFront();
const Lambda = new AWS.Lambda();
const Id = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;
const CloudFrontArn = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ARN;

async function update() {
    const { Distribution: { Status } } = await CloudFront.getDistribution({ Id }).promise();
    console.log(Status);
    // const res = await Lambda.listEventSourceMappings({
    // }).promise();
    // console.log(res);
}

module.exports = update;

update().then(console.log).catch(console.log)