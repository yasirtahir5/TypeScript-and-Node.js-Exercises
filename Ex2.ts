/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase */

let personName3 = `yasir tahir`;
console.log (personName3.toLowerCase());
console.log (personName3.toUpperCase());


function toTitleCase(str: string): string 
{
  return str.replace(/\b\w+/g, (match) => match.charAt(0).toUpperCase() + match.slice(1));
}
console.log (toTitleCase(personName3));

//Program End