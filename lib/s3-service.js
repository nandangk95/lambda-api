'use strict';

/**
 * Lightweight web framework for your serverless applications
 * @author Jeremy Daly <jeremy@jeremydaly.com>
 * @license MIT
 */

// Require AWS SDK
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3"); // AWS SDK
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Export
module.exports = {
    S3: new S3Client(),
    getSignedUrl: getSignedUrl,
    GetObjectCommand: GetObjectCommand,
};
