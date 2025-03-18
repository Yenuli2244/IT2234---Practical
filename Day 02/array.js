//array (using for loop)
let numarray = [1, 4, 5, 3]
for(let i = 0; i < 4; i++){
	console.log(numarray[i])
}

console.log(numarray)

for(let i = 0; i < numarray.length;i++){
	console.log(numarray[i])
}

//(using for-each loop)
numarray.forEach((n) =>{
	console.log(n)
})