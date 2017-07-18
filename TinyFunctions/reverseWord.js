/* function to reverse a word*/

function reverseWord(word){	
	let newWord =''
	for(j=word.length - 1; j>=0 ; j-- ){			
		newWord= newWord + word[j];
	}
	console.log(newWord)
	return newWord
}
reverseWord('hello')
reverseWord('world')
/*OUTPUT
olleh
ollehdlrow
*/

//using js modules split & join & reverse
const reverseWord_2 = (word) =>{
	const temp = word.split('')
	const tempReverse = temp.reverse()
	word = tempReverse.join("")
	console.log(word)
}
console.log('**************')
reverseWord_2('hello')
reverseWord_2('world')

/*Output
**************
olleh
dlrow
*/