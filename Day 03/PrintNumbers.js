//Write recursive function to print numbers from 1 to n

function PrintNum(n, num = 1){
	if(num > n)return 
	console.log(num)
	PrintNum(n, num + 1)
}
PrintNum(5)