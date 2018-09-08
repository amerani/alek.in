require("dotenv").config();
const AWS = require("aws-sdk");

AWS.config = {
    apiVersions: {
        s3: "2006-03-01",
        lambda: '2015-03-31',
        cloudfront: '2018-06-18',
    },
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

module.exports = AWS;