const AWS = require('./aws');
const path = require("path");
const fs = require("fs-jetpack");
const JSZip = require("jszip");
const log = require("./log");

const Lambda = new AWS.Lambda();
const FunctionName = process.env.AWS_LAMBDA_FUNCTION;

async function publish() {
    const { FunctionArn } = await Lambda.updateFunctionCode({
        FunctionName,
        Publish: true,
        ZipFile: await getZip()
    }).promise();

    log.success(`Updated Lambda code ${FunctionArn}`);

    return FunctionArn;
}

function getZip() {
    const zip = new JSZip();
    const lambda = path.resolve(__dirname, "..", "src", "lambda", "index.js");
    const lambdaIndex = fs.createReadStream(lambda);
    zip.file("index.js", lambdaIndex);
    return zip.generateAsync({ type: "nodebuffer" });
}

module.exports = publish;