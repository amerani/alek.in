require("dotenv").config();
const AWS = require("aws-sdk");

AWS.config = {
    apiVersions: {
        s3: "2006-03-01"
    },
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

module.exports = AWS;