/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message. */
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("...Shirt Size: ".concat(size, " \n=>Shirt Message : ").concat(message));
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Long Live Pakistan");
