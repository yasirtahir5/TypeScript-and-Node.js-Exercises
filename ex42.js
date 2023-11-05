/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in
a separate array. Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name. */
var magician_Names2 = ["John", "Alex", "JoJo", "Tim Pane"];
var show_magicians2 = function () {
    magician_Names2.forEach(function (mag_name) {
        console.log(" ".concat(mag_name));
    });
};
var make_great2 = function (magicians) {
    var modified_magician_Names2 = magicians.map(function (name) {
        return "Great ".concat(name);
    });
    return modified_magician_Names2;
};
console.log("Original Array");
show_magicians2();
console.log("Modified Array");
var alter_arr = make_great2(magician_Names2);
console.log(alter_arr);
console.log("Original Array  is still Same");
show_magicians2();
