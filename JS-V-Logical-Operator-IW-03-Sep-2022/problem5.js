// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...


let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

for(i=0; i<=days.length-1; i++){
  if(days[i]=="Sun"){
    console.log("Sunday");
  }

  else if(days[i]=="Mon"){
    console.log("Monday");
  }

  else if(days[i]=="Tue"){
    console.log("Tuesday");
  }

  else if(days[i]=="Wed"){
    console.log("Wednesday");
  }

  else if(days[i]=="Thu"){
    console.log("Thursday");
  }

  else if(days[i]=="Fri"){
    console.log("Friday");
  }

  else if(days[i]=="Sat"){
    console.log("Saturday");
  }
}