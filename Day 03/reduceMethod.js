//reduce method
const mysums = (...n)=>{
	return n.reduce((t, i)=>t=t+i)
}
console.log(mysums(4, 5, 6, 8, 2))