/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code 
that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting 
each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

const userName1: string[] = [
    "admin",
    "Ali",
    "Bilal",
    "Ebad",
    "Ahmed",
  ];
  userName1.forEach((names) => {
    if (names === "admin") {
      console.log(
        `Hello, ${names}! \n Would you like to see the Report for Traffic of Website?`
      );
    } else {
      console.log(`Hello, ${names}, Thank You For Logging in Again `);
    }
  });

//Program End