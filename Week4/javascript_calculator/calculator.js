var readline = require("readline-sync");

var firstNum = readlineSync.questionInt("please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var operation = readlineSync.question("Please enter the operation to perform - add, sub, mul, div: ");

//Function to Add two Numbers
function addTwoNumbers(num1, num2){
    return "Adding Number 1: " + num1 + "with Number 2: " + num2 + " results in a sum of: " + (num1 + num2);
}

//Function to Subtract two Numbers
function subtractTwoNumbers(num1, num2){
    return "Subtracting Number 1: " + num1 + " and Number 2: " + num2 + "results in: " + (num1 - num2);
}

//Function to Multiply two Numbers
function multiplyTwoNumbers(num1, num2){
    return "Multiplying Number 1: " + num1 + " and Number 2: " + num2 + "results in: " + (num1 * num2);
}

//function to Divide two Numbers
function divideTwoNumbers(num1, num2){
    return "Dividing Number 1: " + num1 + " and Number 2: " + num2 + "results in: " + (num1 / num2);
}

if (operation == "add")
{
    //call the addition function
    console.log(addTwoNumbers(firstNum, secondNum));
}
else if (operation == "sub")
{
    //call the subtration function
    console.log(subtractTwoNumbers(firstNum, secondNum));
}
else if (operation == "mul")
{
    //call the multiplication function
    console.log(multiplyTwoNumbers(firstNum, secondNum));
}
else if (operation == "div")
{
    //call the division function
    console.log(divideTwoNumbers(firstNum, secondNum));
}
else{
    console.log ("Something went wrong or you did not provide a valid operation!");
}