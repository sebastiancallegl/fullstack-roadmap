// The Scenario:
// You are developing a user authorization system. A user can be considered "authorized" if they meet all of the following criteria:
// Their accountStatus is explicitly set to "active".
// They have a valid sessionToken, which means the sessionToken is a non-empty string and not null or undefined.
// They have at least one role in the userRoles array that grants them access to the adminPanel. The adminPanel role is represented by the string "admin".
// Crucially, if their isSuspended flag is true, then their suspensionReason must be "pending_review", otherwise they are not considered authorized, regardless of other conditions.
// The Task:
// Write a single, concise JavaScript boolean expression that evaluates to true if the user is both "active" and "authorized" based on all the criteria, and false otherwise.
// User Object Structure:
// JavaScript

const user1 = {
    accountStatus: "active", // Can be "active", "inactive", "pending"
    sessionToken: "someValidToken123", // Can be a string, null, or undefined
    userRoles: ["editor", "admin"], // Array of strings
    isSuspended: false, // Boolean
    suspensionReason: null // Can be a string or null
};

function checkUserAuthorizationState() {
    // develop your logic here
    return true;
}

const users = [
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: true,
        suspensionReason: "pending_review"
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: "editor",
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "inactive",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: 4,
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: "no_compliance"
    },
    {
        accountStatus: "active",
        sessionToken: 3564,
        userRoles: ["editor", "admin"],
        isSuspended: false,
        suspensionReason: null
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: ["editor", "admin"],
        isSuspended: true,
        suspensionReason: "big_fault"
    },
    {
        accountStatus: "active",
        sessionToken: "someValidToken123",
        userRoles: [],
        isSuspended: false,
        suspensionReason: null
    },
]


