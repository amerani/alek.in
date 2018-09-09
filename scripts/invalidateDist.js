const AWS = require("./aws");
const log = require("./log");

const CloudFront = new AWS.CloudFront();
const Id = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;

async function invalidate(lambdaArn) {
    const res = await CloudFront.createInvalidation({
        DistributionId: Id,
        InvalidationBatch: {
            CallerReference: new Date().toISOString(),
            Paths: {
                Quantity: 1,
                Items: [ "/*" ]
            }
        }
    }).promise();
    
    log.success(`Invalidated CloudFront Distribution`);
}

module.exports = invalidate;