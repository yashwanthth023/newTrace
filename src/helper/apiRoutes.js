// require('dotenv').config();

const Url = {
    // baseApiUrl: "http://localhost:3004/v1",
    // baseApiUrl: "http://localhost:7071/api/v1",
    // baseApiUrl: process.env.APP_RUNNER_LAMBDA_URL,
    // baseApiUrl: process.env.BACKEND_URL,
    // s3BucketUrl:process.env.REACT_APP_S3_URL,
    // baseApiUrl: 'https://df9eqe88ig.execute-api.ap-south-1.amazonaws.com/dev/v1',
    // baseApiUrl: "https://yha8avzzv3.execute-api.ap-south-1.amazonaws.com/testing/v1"
    // baseApiUrl:"https://te6dvcjk4j.execute-api.ap-south-1.amazonaws.com/uat/v1"
    // baseApiUrl: "https://dev-d-academy.azurewebsites.net/api/v1"
    baseApiUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    chatUrl: process.env.NEXT_PUBLIC_CHAT_URL,
}
console.log("process.env.NEXT_PUBLIC_BACKEND_URL : ", process.env.NEXT_PUBLIC_BACKEND_URL)
const apiRoutes = {

    //common
    addJobApplicationStatus: "/addJobApplicationStatus",
    addAttachment: "/addAttachment",
    addProfilePic: '/addProfilePic',
    addProfilePic: '/addProfilePic',
    changePassword: '/changePassword',
    fetchJobById: "/fetchJobById",
    fetchCompanyProfile: "/fetchCompanyProfile",
    fetchJobApplicationStatusByPassportId: "fetchJobApplicationStatusByPassportId",
    getCategoryItemsByName: '/getCategoryItemsByName',
    getIndustryByName: "/getIndustryByName",
    getCategoryByIndustry: "/getCategoryByIndustry",
    getCategoryItemsByNames: '/getCategoryItemsByNames',
    getSASUrltoAccess: "/getSASUrltoAccess",
    getSASUrltoAccessPdf: "/getSASUrltoAccessPdf",
    getSignedUrltoAccess: "/getSignedUrltoAccess",
    getSignedUrltoUpload: "/getSignedUrltoUpload",
    getSignedUrltoDelete: "/getSignedUrltoDelete",
    otpForResetPassword: '/otpForResetPassword',
    otpForNormalUserResetPassword: "/otpForNormalUserResetPassword",
    getSignedUrltoUpload: "/getSignedUrltoUpload",
    getSignedUrltoDelete: "/getSignedUrltoDelete",
    googleSignInforWeb: "/googleSignInforWeb",
    deleteAttachment: "/deleteAttachment",
    otpValidationForResetPassword: "/otpValidationForResetPassword",
    resetPassword: "/resetPassword",
    reSendOtp: '/otpForResetPassword',
    searchPostedJobs: '/searchPostedJobs',
    userLogin: '/userLogin',
    updateJobApplicationStatus: "/updateJobApplicationStatus",
    validateOtp: '/validateOTP',

    //employee
    addHardSkillsToPassport: '/addHardSkillsToPassport',
    employeeSocialRegister: '/employeeSocialRegister',
    fetchUserDetails: "/fetchUserDetails",
    fetchJobByPassportId: "/fetchJobByPassportId",
    fetchCompanyProfile: '/fetchCompanyProfile',
    fetchCoursesBasedOnJobTitles: "fetchCoursesBasedOnJobTitles",
    fetchJobsBasedOnApplicationStatus: "/fetchJobsBasedOnApplicationStatus",
    googleSocialSingin: "/socialSignIn/google/mobile",
    googleSocialFacebook: "/socialSignIn/facebook/mobile",
    userRegister: '/employeeRegister',
    updatePartialPassportAndRelevance: '/updatePartialPassportAndRelevance',
    updateEmployeeProfile: '/updateEmployeeProfile',
    updateEmployeeStatus: '/updateEmployeeStatus',
    updateDesiredJobTitles: "/updateDesiredJobTitles",
    employeeProfileDownload: '/employeeProfileDownload',

    //employer
    addCompanyLogo: "/addCompanyLogo",
    addJobAdImage: "/addJobAdImage",
    clonePublishedJob: "/clonePublishedJob",
    employerRegister: "/employerRegister",
    fetchPassportsByJobId: "/fetchPassportsByJobId",
    fetchPassportByIdForEmployer: "/fetchPassportById",
    fetchPassportsBasedOnApplicationStatus: "/fetchPassportsBasedOnApplicationStatus",
    fetchEmployerDetails: "/fetchEmployerDetails",
    fetchCompanyProfileBasedonJobId: "/fetchCompanyProfileBasedonJobId",
    publishJob: "/publishJob",
    updateCompanyProfile: '/updateCompanyProfile',
    updatepartialjobandrelevance: "/updatepartialjobandrelevance",
    updateJobStatusByJobId: "/updateJobStatusByJobId",

    //message
    addMessage: "/addMessage",
    fetchMessages: "/fetchMessages",
    fetchCoversationList: "/fetchCoversationList",
    fetchMessagesNJobDetailsFrmChatList: "/fetchMessagesNJobDetailsFrmChatList",
}

export { Url, apiRoutes };

