// DOM manipulation -----> Document Object Model 

//1. getElementById --> using the unique id's
// const heading = document.getElementById('heading');
// console.log(heading);

// 2.getElementsByTagName--> using name of the tag 
// const heading  = document.getElementsByTagName('h2');
// console.log(heading); 

//3. getElementsByClassName --> fetached elements by the name of their class 
// const heading = document.getElementsByClassName('flag');
// console.log(heading);

// 4. querySelector 
// const  heading = document.querySelector('.flag');
//  console.log(heading);

//5. querySelectorAll 
// const heading=  document.querySelectorAll('.flag');
// console.log(heading);

//DOM Traversal ---------------
//1. parent node 
// const heading = document.querySelector('.heading');
// console.log(heading);
// const parent = heading.parentNode;
// console.log(parent);

//2. children nodes
// const parent = document.querySelector('.parent');
// console.log( parent.childNodes);

//3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


//4. previousElementSibling 
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

//5. manipulation
//const heading = document.querySelector('.flag');
//  heading.innerHTML= "I am tired of this stress";
// heading.style.color = 'purple';
// heading.style.fontSize='50px';
// heading.classList.add('title');    //adding one more class to the given element, now it has two classes title and flag 
// heading.classList.remove('flag');  //the class is removed from the element 

//Advanced Manipulation 
//create element 
// const heading = document.createElement('h5');
//  console.log(heading);
//  heading.innerHTML = 'I have been striving hard';
//  const parent = document.querySelector('.parent');
//  parent.appendChild( heading );


//  const subheading  = document.createElement('p2');
//  subheading.innerHTML = 'Web Dev is awesome';
//  console.log(subheading);
//  const parent = document.querySelector('.parent');
//  parent.appendChild(subheading);
//  subheading.insertAdjacentElement('beforebegin',  subheading);
//   console.log(subheading);


//DOM Events --------------------------
// the basic events things does and what actions we take accordingly

const button = document.querySelector('#btn');
const heading = document.querySelector('#head');
button.addEventListener('click',function(event){
    heading.style.color = 'red';
   // heading.style.fontSize = '50px';
    console.log('button clicked')
} );
