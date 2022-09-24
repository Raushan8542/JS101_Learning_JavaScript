// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob1=2010;
let age1=2022-yob1;

if(age1>=13 || age1<=19){
  console.log("Teenage");
}

let yob2=2000;
let age2=2022-yob2;

if(age2>=20||age2<=29){
  console.log("Twenties");
}
