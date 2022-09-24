// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let num=100;
let count=0;
let sum=0;

let i=1;
while(i<=100){
  if(i%2==0){
    count++;
    sum=sum+i;
  }
  i++;
}
console.log(sum/count);