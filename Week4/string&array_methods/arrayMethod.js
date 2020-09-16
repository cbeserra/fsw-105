var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();

fruit.shift();

var basket = fruit.indexOf("orange");

fruit.push(basket);

var vegLength = vegetables.length;

vegetables.push(vegLength);

food = fruit.concat(vegetables);

let removed = food.splice(4, 2);

const reversed = food.reverse();

console.log(food.toString());