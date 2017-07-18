//Count Letters in an array and print them as an object(key,value)
const allLetters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let letter ={}
function countLetters(letters){
	// finding letters in all letters array and adding to the counter
	for(j=allLetters.length ; j>0 ;j--){
		let counter=1
		for (i=0; i<letters.length;i++){
			if (letters[i]==allLetters[j]) {
				let c= counter++
				let l= letters[i]
				letter[l] = c
			}								
		}		
	}
	console.log(letter)
}
countLetters(['z','y','x','x','w','z','y','u','y','y'])

/*OUTPUT
{ z: 2, y: 4, x: 2, w: 1, u: 1 }
*/