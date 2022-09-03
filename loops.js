

console.log("---------------")
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
for( var i =0;i< arr.length;i++)
{
    console.log( arr[i]);
}



console.log("---------------")
arr.forEach(function(i )
{
    console.log(i);
})

let j = 0 ; // within a scope  inside a block 
const a = 0; // defines a constant value 
while( j < arr.length)
{
    console.log( arr[j++]);

}
