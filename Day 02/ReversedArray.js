//reverse the array using push and pop
//a b c d -> d c b a

let array = ['a', 'b', 'c', 'd']
let ReversedArray = []

while(array.length > 0){
	ReversedArray.push(array.pop())
}

console.log(ReversedArray)