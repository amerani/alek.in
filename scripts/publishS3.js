const AWS = require('./aws');
const path = require("path");
const fs = require("fs-jetpack");
const log = require("./log");
const mime = require("mime-types").contentType;

const S3 = new AWS.S3();
const Bucket = process.env.AWS_S3_BUCKET;

async function publishS3() {
    //empty bucket
    const { Contents } = await S3.listObjectsV2({ Bucket }).promise();
    const Objects = Contents.map(x => ({ Key: x.Key }));
    const { Deleted } = await S3.deleteObjects({ Bucket, Delete: { Objects }}).promise();
    log.success(`Emptied S3 bucket`);

    //upload files
    const dist = path.resolve(__dirname, "..", "dist");
    const files = await fs.findAsync(dist, { matching: "*" });
    const puts = files.map(file => {
        const Key = file.replace("dist/", "");
        return S3.putObject({
            Bucket,
            Key,
            Body: fs.createReadStream(path.resolve(dist, Key)),
            ContentType: mime(Key) || "text/plain"
        }).promise();
    });
    await Promise.all(puts);
    log.success(`Uploaded to S3 bucket`);
}

module.exports = publishS3;