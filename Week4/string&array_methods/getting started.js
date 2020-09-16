
function capitalizeAndLowercase(str){
    var upperLower = str.toUpperCase() + str.toLowerCase();
    return"Upper and Lower Case String is: " + upperLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("============");

function findMiddleIndex(str){
    var middleOfString = Math.floor(str.length /2);
    return "Rounded down String's half is: " + middleOfString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log("===========");

function returnFirstHalf(str){
    var middleOfWord = (str.length /2);
    return "Return the String's first half is: " + str.slice(0, middleOfWord);
    
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));
console.log("===========")

function firstHalfCapSecondLower(str){
    var midWord = (str.length /2);
    var wordHalf = (0, midPoint);
    var upperfirst = midWord + wordHalf;
    return "Word split in half and first half upperscase is: " + upperfirst;
}
console.log(firstHalfCapSecondLower("Hello"));
console.log(firstHalfCapSecondLower("Hello World"))

