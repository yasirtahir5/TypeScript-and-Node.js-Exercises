/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement, such as You really like bananas! */

let favoriteFruits: Array<string> = ["Peach", "Mango", "Banana"];

for (let i: number = 0; i < favoriteFruits.length; i++) {
  if (favoriteFruits[i].toLowerCase() === "apple") {
    console.log("You really like Apples");
  }
  if (favoriteFruits[i].toLowerCase() === "banana") {
    console.log("You really like Bananas");
  }
  if (favoriteFruits[i].toLowerCase() === "mango") {
    console.log("You really like Mangoes");
  }
  if (favoriteFruits[i].toLowerCase() === "blue berry") {
    console.log("You really like Blue Berries");
  }
  if (favoriteFruits[i].toLowerCase() === "peach") {
    console.log("You really like Peaches");
  }
}

//Program End