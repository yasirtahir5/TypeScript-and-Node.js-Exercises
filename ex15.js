/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end
of your list. • Print a new set of invitation messages, one for each person in your list. */
var guestList1 = ["Bilal", "Ahmed", "Asad"];
// for (const guest of guestList1) 
// {
//   console.log(guestList1 + " I found a bigger dinner table at the restaurant");
// }
for (var i = 0; i < guestList1.length; i++) {
    console.log("".concat(guestList1[i], " I found a bigger dinner table at the restaurant"));
}
guestList1.unshift("Usman");
guestList1.splice(2, 0, "Ali");
guestList1.push("Amir");
for (var _i = 0, guestList1_1 = guestList1; _i < guestList1_1.length; _i++) {
    var guest = guestList1_1[_i];
    console.log("Dear" + guest + ", tonight, we want to celebrate with good food and good people.\n  would be great if you could join us to dinner");
}
// Program End
