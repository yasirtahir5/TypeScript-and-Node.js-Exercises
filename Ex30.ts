/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let userName: string[] = [
    "admin",
    "Ali",
    "Bilal",
    "Ebad",
    "Ahmed",
  ];
  if (userName.length > 0) {
    userName.forEach((names) => {
      if (names === "admin") {
        console.log("Hello",names,"!", "\n Would you like to see the Report for Traffic of Website?")
      } else {
        console.log("Hello,",names, ",Thank You For Logging in Again");
      }
      userName.length = 0; 
    });
  } else {
    console.log(`We Need to Find Some Users For the List`);
  }

//Program End