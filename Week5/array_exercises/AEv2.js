//Section A
console.log ("A-1")

function fiveAndGreaterOnly(arr) {
  var greaterNum = arr.filter(function(num) {
      return num >= 5;
});
    return greaterNum
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


console.log ("A-2")
function evensOnly(arr) {
  const evenNum = arr.filter(function(num){
     return num % 2 === 0
})
  return evenNum
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


//Section B

console.log ("B-1")
function doubleNumbers(arr){
  let double = arr.map(i=>i*2);
  return double;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

console.log ("B-2")
function stringItUp(arr){
    let string = arr.map(String);
    return string;
}
console.log(stringItUp([2, 5, 100]));

console.log ("B-3")
function capitalizeNames(arr){
  let upperCase =arr.map(function(string){
    return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();
});
  return upperCase
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

//Section C

console.log ("C-1")
function total(arr) {
const result = arr.reduce(function(finalAddition, num) {
		return finalAddition = finalAddition + num;
		return finalAddition;
});
return result;
}

console.log(total([1,2,3])); // 6

console.log ("C-2")
function stringConcat(arr) {
    return arr.reduce(function(final, num) {
        return final + num.toString();
    });
}
console.log(stringConcat([1,2,3])); // "123"

console.log ("C-3")
function totalVotes(array) {
    return array.reduce(function(count, voter) {
        return count + voter.voted;
    }, 0);
}
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

//Section D

console.log ("D-1")
function leastToGreatest(arr) {
  const result = arr.sort(function (a,b){
	return a-b;
});	
	return result;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

console.log ("D-2")
function greatestToLeast(arr) {
 const result = arr.sort(function (a,b){
	return b-a;
});	
	return result;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

console.log ("D-3")
function lengthSort(arr) {
  const result = arr.sort(function (a,b){
      return a.length - b.length;
  });
  return result;
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 