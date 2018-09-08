const AWS = require("./aws");
const chalk = require("chalk");

const CloudFront = new AWS.CloudFront();
const Id = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;

async function update(lambdaArn) {
    const { ETag, DistributionConfig } = await CloudFront.getDistributionConfig({ Id }).promise();
    DistributionConfig.DefaultCacheBehavior.LambdaFunctionAssociations.Items[0].LambdaFunctionARN = lambdaArn;
    const res = await CloudFront.updateDistribution({ Id, DistributionConfig, IfMatch: ETag }).promise();

    console.log(chalk.green(`Successfully updated CloudFront Distribution`));
}

module.exports = update;