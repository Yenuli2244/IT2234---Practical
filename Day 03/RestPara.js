//Rest parameter
const mysum = (...n)=>{
	console.log(n)
	
	let sum = 0
	n.forEach((i) =>
	{
	sum += i
	})
	console.log(sum)
	
	
}
mysum(4, 5, 6, 89, 2)