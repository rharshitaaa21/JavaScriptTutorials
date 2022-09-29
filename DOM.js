// DOM manipulation -----> Document Object Model 

// 1. getElementById --> using the unique id's
// const heading = document.getElementById('heading');
// console.log(heading);

// 2.getElementsByTagName--> using name of the tag 
// const heading  = document.getElementsByTagName('h2');
// console.log(heading);

//3. getElementsByClassName --> fetached elements by the name of their class 
// const heading = document.getElementsByClassName('flag');
// console.log(heading);

// 4. querySelector 
// const  heading = document.querySelector('flag');
//  console.log(flag);

//5. querySelectorAll 
//const heading=  document.querySelectorAll('.flag');
//console.log(heading);

//DOM Traversal ---------------
//1. parent node 
// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

//2. children nodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

//3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


//4. previousElementSibling 
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

//5. manipulation
// const heading = document.querySelector('.flag');
//  heading.innerHTML= "I am tired of this stress";