console.log('\n***Question 1***')
function sum(n1, n2){
    return n1 + n2
}
var result = sum(57, 10)
console.log (result)


console.log('\n***Question 2***')
function largestOf3(n1, n2, n3){
    return Math.max.apply(Math, numbers);
}
let numbers = [13, 7, 44];
console.log(largestOf3(numbers))
 

console.log('\n***Question 3***')
function evenOrOdd(i) {
  if(i % 2 == 0){ 
        return "Even number!";
    } else if (i % 2 != 0) { 
       return "Odd number!";
    }
  }
var answer = evenOrOdd(7);
    console.log(answer);

    
console.log('\n***Question 4***')
function stringCombo(str){
    if(str.length <= 20){
        return str + str
    } else if (str.length > 20){
        return str.slice (0,str.length / 2)
    }
}

console.log (stringCombo ("hello") )
console.log (stringCombo ("hello how are you this morning?") )