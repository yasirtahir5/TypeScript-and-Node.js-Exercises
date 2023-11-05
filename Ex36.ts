/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message. */

function make_shirt2(
    size: string = "large",
    message: string = "I Love TypeScript"
  ) {
    console.log(`...Shirt Size: ${size} \n ...Shirt Message : ${message}`);
  }
  make_shirt2(); 
  make_shirt2("medium");
  make_shirt2("small", "Long Live Pakistan");

//Program End