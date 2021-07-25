var name = prompt("whar is your name?")

 alert("Hello"+" "+ name + " Welcome to our Website")

 if(name == "Omar"){
 document.write("Welcome Boss Omar")
 }
 else{
 document.write(" Welcom " + name)
 }

var favoriteCar = prompt("What is your favorite car?, please choose one of these: 1- Mercedes 2-Toyota 3-Volkswagen ")

 function userFavoriteCar(favoriteCar){


 while(favoriteCar == "Mercedes" && favoriteCar =="Toyota" && favoriteCar == "Volkswagen"){

   var favoriteCar = prompt("What is your favorite car?, please choose one of these: 1- Mercedes 2-Volkswagen 3-Toyota ")

alert("Wow, Nice choice! " + name)
}


  var numberOfPics = prompt("how many times you wish to see it ")

 while(numberOfPics >5 ){
  numberOfPics = prompt("please enter number less than 5!")
 }


 if(favoriteCar == "Mercedes"){

 
 for(var i = 0; i< numberOfPics;i++)

 {document.write(
  "<div>" + "<h3>" + favoriteCar+"</h3>"
 + "<img  src='https://www.mbaskool.com/2018_images/top_brands/car_world/car_wrld03.jpg'     />" + "</div>")}
 }
 else if (favoriteCar =="Volkswagen"){

 for(var i = 0 ; i <numberOfPics;i++)

 {document.write(
  "<div>" + "<h3>" + favoriteCar+"</h3>"
 + "<img  src='https://www.mbaskool.com/2018_images/top_brands/car_world/car_wrld02.jpg'     />" + "</div>")}
 }
 else if(favoriteCar =="Toyota"){
  for(var i = 0 ; i <numberOfPics;i++)
 {document.write(
  "<div>" + "<h3>" + favoriteCar+"</h3>"
 + "<img  src='https://www.mbaskool.com/2018_images/top_brands/car_world/car_wrld01.jpg'      />" + "</div>")}
 }

 }

 userFavoriteCar(favoriteCar);


 function userAge(){

 var age = prompt(" How old are you? ");
 }

 userAge();




 

 








//-------------------------------------------------------
//no need to read the comments below






















// syntax of js

// /*
// * data types
// * numbers
// ex 1 2 -2 0 4

// * String = 'name' or "name"

// * Boolean = true/false

// */

// /**
//  * Variables = container for the values / storing
//  * 
//  * Var x = 12
//  * 
//  * var name = "Omar"
//  * 
//  */
console.log(4 + '2')


// // Operators
// /**
//  * 
//  * assignment op ---> =
//  * arthmatics op ---> + , - , * , / , %
//  * 
//  * comparasion op ---> 
//  * 
//  * > , < , == , === , != , >=
//  */

// var firstName = "Omar"
// // show it on the console
// // console.log(firstName)
// // console.log("hello Omar")

// // var x = "123"

// // console.log(x)

// // console.log(1+1 , 2>5 , 7<10 )

// // var num = 10
// // var num2 = 2021

// // var concat = firstName + " " + num
// // var sum = num + num2
// // console.log(concat, "sum result" , sum)

// // console.log(++num)

// // // Boolean
// // var isGreater = true


// // var z 
// // var y = z + 10

// // console.log(z, "y" , y)

// console.log(1==1 , 1=="1" , 1=='10')

// console.log(1===1 , 1==='1')


// /*
// pop up boxes

// alert("hey and welcome")// show info to the user

// prompt() // input smth from user

// document.write()

// */

// /*
// logical Operators
// && ! ||

// truth table

// T && T = true
// T && F = false
// T || T = true
// T || F = true





// */

//  var name = prompt("whar is your name?")


//  alert("hey"+" "+ name + " welcome to my Website")

//  var favCar = prompt("what is your fav car?")

//  console.log(name)

// document.write('<p>' + favCar + '<p>')

//  document.write("hello from javascript")

// // var name = prompt("whar is your name?")


// // alert("hey"+" "+ name + " welcome to my Website")

// // var favCar = prompt("what is your fav car?")

// // console.log(name)

// // document.write('<p>' + favCar + '<p>')

// // document.write("hello from javascript")



// // logical op ex

// // console.log(1==1 && 1>0)
// // console.log(1==9 && 1>0)
// // console.log(1==1 || 1>0)

// /*
// conditional statment

// if(condition){
//   do smth
// }
// else{

// }
// */

// // if(1<0 || 1===1){
// //   console.log()

// // }

// var name = prompt("whar is your name?")


// alert("hey"+" "+ name + " welcome to my Website")

// var favCar = prompt("what is your fav car?")

// if(favCar == "Lamborghini"){
// document.write("<div>" + "<h3>" + favCar + "</h3> " + "<img" src ='https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg' /> + "<div>")
// }
// else if (favCar == "Bugatti"){

// }
// else if(favCar == "Mercedes"){

// }

// else{
//   alert("we don't have this car")
// }

