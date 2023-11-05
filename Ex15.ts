/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end 
of your list. • Print a new set of invitation messages, one for each person in your list. */

let guestList1 = [`Bilal`,`Ahmed`, `Asad`];

,
guestList1.unshift("Usman");
guestList1.splice(2, 0, "Ali");
guestList1.push("Amir");

for (const guest of guestList1) 
{
  console.log(`Dear`+ guest +  `, tonight, we want to celebrate with good food and good people.
  would be great if you could join us to dinner`);
}

// Program End