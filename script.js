// for(let i = 1; i<=10; i++){
//     console.log(`Outer loop value : ${i}`);
//     for(let j= 0; j<=10; j++){
//         console.log(i + '*' + j +  '= ' + i*j);
        
//     }
// }


// let myArray  = ["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element); 
// }

// for of
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for( const num of arr ){
//  console.log(num);
 
// }
// const greetings = " Hello  world! "
// for (const greet  of greetings) {
//     console.log(`Each char is ${greet }`);
// }

// // map

// const map = new map()
// map.set('IN',"India")
// map.set('USA',"UNITED STATE OF AMERICA")
// map.set('FR',"FRANCE")
// map.set('IN',"India")

// console.log(map);
// for(const key of map)
// {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game' : 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key , value] of myObject) {
    
// }





// FOR IN LOOP

// const coding = ["js", "ruby ","java","python","cpp"]


// coding.forEach(function (val){
//     console.log(val);
    
// })


// Template literal

// let obj = {
//     item : "pen",
//      price: 10

// };
// let output =`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
 
// console.log("the cost of", obj.item, "is" , obj.price, "rupees");


// let specialString = `This is a template literal ${1+2+3}`;
// console.log( specialString);

// STRING IN JS

// let fullName = prompt("Enter your full name without Space");

// let username = "@" + fullName + fullName.length;
// console.log(username);

// let foodItem = ["potato"," apple", "litchi", "tomato"];
// let marks = [65, 68, 41 ,25]
// console.log(foodItem);
//  console.log(foodItem.toString());
//  console.log(foodItem);
 

// let marvel_heroes = ["thor", "iron-man", "Captan-america"];

// // let dcHeroes =["superman", "batman"];

// // let indianHeroes =["balveer", "krish", "saktiman"];

// // let heroes = marvel_heroes.concat(dcHeroes).concat(indianHeroes);
// // console.log(heroes);


// let val = marvel_heroes.shift();
// console.log("deleted",val);

// SLICE


// let marvelHeroes =["thor", " spiderman","Ironman","Dr. strange"];

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice());
// ;

// splice


// let arr = [1, 2, 3, 4, 5, 6, 7];
// // arr.splice(2, 2, 102, 103);
// // arr.splice(2,0,101);
// // Delete element
// arr.splice(3,1)

//                      FUNCTIONS




// function val (msg){ //parameter -> input
//     console.log(msg);
//     console.log(msg*n);
    
// }
// val(" i love js",100); //argument

// function sum( s1, s2){
//     return s1+s2;
// }
// console.log(sum(12, 15));

// const arrowSum =( a, b) =>{
//     console.log(a+b);
    
// };

// function countVowels(str){ 
//     let count =0;
//     //"Apnacollege",count =0;
//     for (const char of str) {
//         if(char ==="A" || char ==="E" || char ==="I" || char ==="O" || char ==="U"){
//           count++;  
//         }
//     }
//     return count;

// }

//                  FOREACH LOOP IN ARRAY



// let arr = [ "dfsf","dfs","edfe"];

// arr.forEach((val, idx , arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
    
// });

// let num = [25];
// num.forEach((num) => {
//     console.log(num*num*num);
    
// });

//                  ARR MAP

// let nums = [34,65,35];

// let newArr = nums.map((val)  =>{
// return val*2;

// });

// console.log(newArr);

//                  ARR FILTER


// let arr =[ 1,2,3,4,5];

// let evenArr = arr.filter((val) => {
//     return val <= 2 ;
// });
// console.log(evenArr);


//                  ARR REDUCE



// let arr =[ 1,6,3,9,2];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

//                         DOM


//   console.log("window");
  
// console.log(document.body);
// console.dir(document.body.childNodes[1]);


// let div = document.querySelector("div");
// console.log(div);


// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText  + " From the student";

