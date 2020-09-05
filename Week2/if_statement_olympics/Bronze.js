var person = {
    name: "Bobby",
    age: 12
}
//Question 1
if(person.age >=18){
    console.log(person.name + " is old enough")
} else {
    console.log(person.name + " is not old enough")
}
//Question 2
 if(person.name.startsWith("B")){
    console.log(person.name + " can enter(begins with B)")
    }else{
    console.log(person.name + "cannot enter(does not begin with B)")
}
//Question 3
if(person.age>=18 && person.name.startsWith("B")){
    console.log(person.name + " may enter(begins with B and older than 18)")
}else{
  console.log(person.name + " cannot enter (does not begin with B and/or under 18)")
}
