/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase */
var personName3 = "yasir tahir";
console.log(personName3.toLowerCase());
console.log(personName3.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (match) { return match.charAt(0).toUpperCase() + match.slice(1); });
}
console.log(toTitleCase(personName3));
//Program End
