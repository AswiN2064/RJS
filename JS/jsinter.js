//array

const array = [10,20,"aswin",5.12,Date()]
console .log("before change")
for (var ele in array){
    console.log(array[ele])
}

console.log("after change")
// array[0]= "reactjs"
array.push("3rd years")  //appending in an array

for (var ele of array){
    console.log(ele)
}

array.pop()  //removing an element in an array

for (var ele of array){
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()

console.log("after poping all the elements", array)

if(array.length > 0){
    console.log("Elements are present")
}
else{
    console.log("No elements are in the array")
}

array.push(1)
if(array.length > 0){
    console.log("Elements are present", array)
}
else{
    console.log("No elements are in the array")
}

// array.forEach(element => {
//     console.log(element)
// })