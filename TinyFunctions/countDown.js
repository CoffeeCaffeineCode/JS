//Count Down
const countDowm =(count) =>{
	const delay= setInterval(() =>{
		if(count=== 0)
			clearInterval(delay)
		else
			console.log(count)
		count--
	},10)
}
countDowm(5)

/*Output
5
4
3
2
1
*/