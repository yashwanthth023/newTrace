// require('dotenv').config();

const Url = {
    // baseApiUrl: "http://localhost:3004/v1",
    baseApiUrl: "http://localhost:7071/api/v1",
    // baseApiUrl: process.env.APP_RUNNER_LAMBDA_URL,
    // baseApiUrl: process.env.BACKEND_URL,
    // s3BucketUrl:process.env.REACT_APP_S3_URL
    // baseApiUrl: process.env.PUBLIC_BACKEND_URL,
}

const apiRoutes = {
    addPrototypeMaster: "/addPrototypeMaster",
    fetchPrototypeDetails: "/fetchPrototypeDetails",
    updateVersionById: "/updateVersionById",
    getVersionById: "/getVersionById",
    updatePrototypeDetails: "/updatePrototypeDetails",
    addVersion: "/addVersion",
    addExperiment : "/addExperiment"
}

export { Url, apiRoutes };

