/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting
each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
var userName = [
    "admin",
    "Ali",
    "Bilal",
    "Ebad",
    "Ahmed",
];
userName.forEach(function (names) {
    if (names === "admin") {
        console.log("Hello, ".concat(names, "! \n Would you like to see the Report for Traffic of Website?"));
    }
    else {
        console.log("Hello, ".concat(names, ", Thank You For Logging in Again "));
    }
});
