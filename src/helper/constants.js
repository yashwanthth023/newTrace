// import tickmark from '../assets/images/tickCheckbox.png'
const companyName = '(d)Academy';

const SessionStorageKeys = {
    Assessment: 'assessment',
    AssessmentId: "AssessmentId",
    AssessmentMarks: 'assessmentMarks',
    ClassId: 'classId',
    ClassName: 'className',
    CategoryIndex: 'categoryIndex',
    CategoryName: 'categoryName',
    CreatePersonaPath: "CreatePersonaPath",
    CurrentDashboard: "CurrentDashboard",
    Email: "Email",
    Error: 'Error',
    InviteId: 'inviteId',
    Location: "Location",
    MeetingURL: "MeetingURL",
    Name: "Name",
    NewPasswordEmail: 'newPasswordEmail',
    SessionId: "SessionId",
    SessionToken: "SessionToken",
    SocialUser: "SocialUser",
    SubjectId: 'subjectId',
    SubjectName: 'subjectName',
    TabIndex: 'TabIndex',
    UserId: "UserId",
    UserImage: "UserImage",
    UserName: "UserName",
    UserType: "userType",
    Year: "year",
    passportId: 'passportId',
    userEmail: 'userEmail',
    jobId: "jobId",
    jobIndex: "jobIndex",
    userType: 'userType',
}

const CSS = {
    inputField: 'rg-input-field',
    select: 'rg-select-field',
    source: "rg-select-field-source",
    phoneNo: 'rg-phone-no',
    container: 'page-container',
    firstBlock: 'first-half',
    secondBlock: 'second-half',
    thanksHeader: 'thaks-header',
    thanksMessage: 'thanks-message',
    registerHeader: "rg-register-header",
    inputInfo: 'rg-input-info-label',
    optionField: "rg-option-field",
    errorWithPadding: "error-message error-message-padding",
    errorMessage: "error-message",
};

const passportsNames = {
    aboutMe: "About Me",
    benefits: "Benefits",
    earning: "Base Earnings",
    expertise: "Expertise",
    employmentType: "Employment Type",
    experience: "Experience",
    education: "Education",
    hardSkills: "Hard Skills",
    humanSkills: "Soft Skills",
    isSponsorshipAvailable: "Sponsorship Available",
    language: "Language",
    location: "Current Location",
    title: "Title",
    resume: "Attachments",
    workPlace: "Work Place",
}

const jobpassportNames = {
    aboutMe: "About Job",
    benefits: "Benefits",
    expertise: "Expertise",
    industrySector: "Industry Sector",
    earning: "Base Salary",
    experience: "Experience",
    employmentType: "Employment Type",
    education: "Education",
    hardSkills: "Hard Skills",
    humanSkills: "Soft Skills",
    isSponsorshipAvailable: "Sponsorship",
    language: "Language",
    location: "Job Location",
    resume: "Add Image",
    title: "Title",
    workPlace: "Work Place",
}

const validation = {
    InvalidPassWord: 'Invalid Password',
    MustContain: 'Atleast 1lower,1upper,1number,1special character',
}

const rangeIndicator = [
    { value: 0, label: "€ 0" },
    { value: 40000, label: "€ 40k" },
    { value: 80000, label: "€ 80k" },
    { value: 120000, label: "€ 120k" },
    { value: 160000, label: "€ 160k" },
    { value: 200000, label: "€ 200k" }
];

const jobStatus = {
    ACCEPTED: "accepted",
    APPLIED: "applied",
    CREATED: "created",
    CLOSED: "closed",
    HIDDEN: "hidden",
    INVITED: "invited",
    UNHIDE: "unhidden",
    POSTED: "posted",
    REJECT: "rejected",
    WITHDRAWN: "withdrawn",
}

const workPlaceData = ['Work From Home', "Office", 'Remote', 'Hybrid'];

const employmentTypeData = ['Full Time', "Part Time", 'Flexible', 'Contract', 'Internship',
    'Apprenticeship', 'Seasonal', 'Freelance', 'Self-Employed'];

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];


const categoryNames = {
    WhereDidYouHearAboutUs: "WhereDidYouHearAboutUs"
}

const jobMatchedNavList = [
    // { value: "all", key: 'All' },
    { value: 'matched', key: 'Matched' },
    { value: 'applied', key: 'Applied' },
    { value: 'invited', key: 'Invited' },
    { value: 'accepted', key: 'Accepted' },
    { value: 'rejected', key: 'Rejected' },
    { value: 'withdrawn', key: 'Withdrawn' }
];

const Roles = {
    None: 0,
    Guest: 1,
    Worker: 2,
    Employer: 4,
    SuperAdmin: 8
};
const labelTitle = {
    Update: "Update",
    company_Name: "Company Name *",
    VAT_Number: "VAT Number *",
    website_Address: "Website Address *",
    contact_Address: "Contact Address *",
    country: "Country",
    asterik: "*",
    enter_Country: "Enter country",
    state: "State",
    enter_State: "Enter state",
    City: "City",
    enter_city: "Enter city",
    company_Description: "Company Description",
    company_Privacy_Statement: "Company Privacy Statement",
    Already_have_an_account: "Already have an account?",
    log_In: " Log In",
    code_1: "+1",
    first_Name: "First name",
    last_Name: "Last name",
    Company_name: "Company name",
    contact_Name: "Contact Name",
    phone_number_mandatory: "Phone number*",
    linkedIn: "LinkedIn",
    dont_have_an_account: "Don't have an account?",
    register_Account: "Register account",
    Password: "Password",
    Register: "  Register",
    email_Address: "Email Address",
    Or_continue_with: "Or Continue with",
    not_Verified: 'notVerified',
    is_Valid: 'isValid',
    email: "email",
    response: 'response',
    popstate: "popstate"

}

const placeHolders = {
    start_typing_here: "Start typing here",
    user_NamePlaceholder: "userNamePlaceholder",
    Password: "Password"
}

const messages = {
    Profile_updated: 'Profile updated successfully!',
    OTP_Sent_Successfully: 'OTP Sent Successfully!'


}
const errorMessageAlert = {
    country_Required: 'Country is required',
    state_Required: 'State/Region is required',
    city_Required: 'City/Town is required',
    zipcode_Required: "Postal/Zip Code is required",
    zipcode_Error: "Invalid Postal/ Zip Code(should not exceed over 10)",
    success: 'Current Location Submitted Successfully!',
    echaracter: 'Character ee is restricted',
    password_ChangedSuccess: 'Password Changed Successfully!',
    password_Warning: "Current password and new password can not be same.",
    upper_CaseErr: "Password must start with a uppercase letter",
    lower_CaseErr: "Password must contain at least one lowercase letter",
    no_CaseErr: "Password must contain at least one number",
    special_CaseErr: "Password must contain at least one special character",
    min_CaseErr: "Password must be at least 8 characters",
    must_One_Uppercase: "Password must contain at least one uppercase letter",
    invalid_Email: "Invalid Email"
}

const socialMedia = {
    google: "google",
    facebook: "facebook"
}

export {
    categoryNames,
    CSS,
    companyName,
    employmentTypeData,
    jobpassportNames,
    jobStatus,
    jobMatchedNavList,
    month,
    passportsNames,
    rangeIndicator,
    Roles,
    SessionStorageKeys,
    validation,
    workPlaceData,
    labelTitle,
    messages,
    placeHolders,
    errorMessageAlert,
    socialMedia
};

