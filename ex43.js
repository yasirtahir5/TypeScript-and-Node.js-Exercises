/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collects as many items as the function call provides, and it should print a summary of
the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
var sandwich = function (_a) {
    var ingredients = _a.slice(0);
    console.log("Making a sandwich with the following items:");
    ingredients.forEach(function (item, i) {
        console.log("".concat(1 + i, ".").concat(item));
    });
};
sandwich(["Olives", "Chicken", "Boiled Egg Slice's"]);
sandwich(["Olives", "Beaf"]);
sandwich(["Mashroom"]);
