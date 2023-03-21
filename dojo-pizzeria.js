function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olive", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "alfredo", ["mozzarella", "feta"], ["chicken", "garlic"]);
console.log(p3);

var p4 = pizzaOven("thin crust", "no sauce", ["no cheese"], ["meatball"]);
console.log(p4);


function randomPizza() {
    var ingredients = {
        "crustType": ["deep dish", "hand tossed", "thin crust"], //3
        "sauceType": ["traditional", "marinara", "alfredo", "no sauce"], //4
        "cheeses": ["mozzarella", "feta", "swiss", "no cheese"], //4
        "toppings": ["pepperoni", "sausage", "mushrooms", "olive", "onions", "chicken", "garlic", "meatball"] //8
    }
    
    //grabs a random index for each of the object arrays and returns that item. Currently only one of each
    return pizzaOven(random(ingredients.crustType),
    random(ingredients.sauceType),
    random(ingredients.cheeses),
    random(ingredients.toppings))
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var pizza = randomPizza();
console.log("Random pizza is:\nCrust Type: " + pizza.crustType +
    "\nSauce Type: " + pizza.sauceType +
    "\nCheeses: " + pizza.cheeses +
    "\nToppings: " + pizza.toppings)