function clicked() {
    console.log("the button was clicked");
}

// window.onload = function(){
//     console.log('The document was loaded');
// };


firstcontainer.addEventListener('click', function () {
    console.log("click hua");
});


heading.addEventListener('mouseover', function () {
    console.log("Mouse on container");
});

heading.addEventListener('mouseout', function () {
    console.log("Mouse out of container ");
});



heading.addEventListener('mouseup', function () {
    console.log("Mouse up when clicked");
});



heading.addEventListener('mousedown', function () {
    console.log("Mouse down when clicked ");
});