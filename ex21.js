/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.
*/
var numbers = [1, 2, 3, 4, 5];
var index = 10;
try {
    console.log(numbers[index]);
}
catch (error) {
    console.log("An error occurred:", error);
}
if (index >= 0 && index < numbers.length) {
    console.log("Number at index", index, ":", numbers[index]);
}
else {
    console.log("Invalid index. Please provide a valid index.");
}
