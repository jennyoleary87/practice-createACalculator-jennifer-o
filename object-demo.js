/*
04/21/25
Object demo with Carrie
*/

let newDrill = {
    brand: "Dewalt",
    corldess: true,
    battery: "20V",
}

let oldDrill = {
    brand: "Black and Decker",
    cordless: false,
    battery: null // no battery
}

console.log(newDrill.brand); // Dewalt - dot notation
console.log(oldDrill["brand"]); // Black and Decker - bracket notation

// =====================================================

let city = {
    name: "St.Louis",
    state: "MO",
    yearFounded: 1822, // wrong year! fix it
    classification: "city",
    cityPopulation: 319294 // misleading number! fix it
}

city["yearFounded"] = 1764; // update the year founded
console.log(city);

city.metroPopulation = 2807338; // add property
console.log(city);

// OOPS =====================================================

let sunsetDiner = {
    name: "The Sunset Diner",
    location: "Pleasant Pines, AZ",
    cuisine: "Classic American",
    knownFor: ["Strawberry Oreo Milkshake", "Betty's Best Burger"],
    priceRating: "$"
}

for (let someKey in sunsetDiner) { // prints just values without keys
    console.log(sunsetDiner[someKey]); // need bracket notation because we don't know the key name
}

for (let aKey in sunsetDiner) { // using let makes aKey a block level scope variable
    if (Array.isArray(sunsetDiner[aKey])) { // finding arrays in the object
        for (let element of sunsetDiner[aKey]) {
            console.log(element); // prints each element in the knownFor array
        }
    }
};

let maggiesPizza = {
    name: "Maggie's Pizza",
    location: "Glass Lake, NY",
    cuisine: "Casual Italian",
    knownFor: ["Cheese Pizza", "Garlic Knots"],
    priceRating: "$$"
}

let parthenon = {
    name: "Parthenon",
    location: "San Jose, CA",
    cuisine: "Traditional Greek",
    knownFor: ["Gyros", "Slow-Roasted Leg of Lamb", "Farro Dolmas Salad"],
    priceRating: "$$"
}

let restaurants = [sunsetDiner, maggiesPizza, parthenon]; // array of objects

console.log(restaurants); // prints the array of objects

console.log(`Next time you take a roadtrip through the southwest, don't miss ${restaurants.name} in ${restaurants.location}, best in class for its ${restaurants.cuisine} fare.
Signature dishes include ${restaurants[0].knownFor[0]} and ${restaurants[0].knownFor[1]}.
Price Rating: ${restaurants.priceRating}`); // prints the string with the object values

