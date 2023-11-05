/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
its order has changed. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placestoVist = [
    "Naran",
    "Ziarat",
    "Lahore Fort",
    "ZeroPoint Muree",
    "Passu Cones",
];
//Original Order off array
console.log("Original Order of Array");
for (var i = 0; i < placestoVist.length; i++) {
    console.log("".concat(placestoVist[i]));
}
console.log("Alphabetically Sorted Array (without Modifing Orignal Array)..");
//   console.log([...placestoVist].sort());
for (var i = 0; i < placestoVist.length; i++) {
    console.log(__spreadArray([], placestoVist, true).sort());
}
//Original Order off array
console.log("Original Order Still Same ");
console.log(placestoVist);
//Sorting array in Reverse Alphabetical Order
console.log("Reverse Alphabetically Sorted Array (Withoud Modifing Actual Array)..");
console.log(__spreadArray([], placestoVist, true).sort().reverse());
//Original Order off array
console.log("Original Order Still Same");
console.log(placestoVist);
//Now we will directly change the Order of Original array ..
console.log("Reverse the Order of Orignal List/Array");
console.log(placestoVist.reverse());
//Now we will again Reverse the Order of Reversed array ..
console.log("Reverse the Order of Reversed Array to its Orignal Order");
console.log(placestoVist.reverse());
//Now We will Sort the array
console.log("Sorting the  Array ");
console.log(placestoVist.sort());
//Now We will Sort the array
console.log("Sorting the  Array to  Reversed Alphabetical Order");
console.log(placestoVist.reverse());
