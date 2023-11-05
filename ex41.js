/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */
var magician_Names = ["John", "Alex", "JoJo", "Tim Pane"];
var show_magicians = function () {
    magician_Names.forEach(function (mag_name) {
        console.log(" ".concat(mag_name));
    });
};
var make_great = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magician_Names[i] = "Great ".concat(magician_Names[i]);
    }
};
console.log("Before adding Great Word Before Magican namees");
show_magicians();
make_great(magician_Names);
console.log("Displaying Magcian Array Names After Adding Keyword 'Great'");
show_magicians();
