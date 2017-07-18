//Odd or Even
let odds=[]
let evens=[]
function oddsAndEvens (numbers){
	for(i=0; i<numbers.length; i++){
		//check to see if its divisable by 2
		if (numbers[i] % 2 ===0) {
			evens.push(numbers[i])
		}
		else{
			odds.push(numbers[i])
		}
	}
	console.log('Odds = ',odds)
	console.log('Evens = ',evens)	
}
oddsAndEvens([21,99,43,1,8,2,48,82])

/*OUTPUT
Odds =  [ 21, 99, 43, 1 ]
Evens =  [ 8, 2, 48, 82 ]
*/