//Write a boolean function to find a given number is prime

function isPrime(num){
	if(num < 2) return false
	for(let i = 2; i <= num / 2; i++){
		if(num % i == 0)return false
	}
	return true
}

console.log(isPrime(5))
console.log(isPrime(8))
		