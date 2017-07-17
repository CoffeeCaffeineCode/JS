/* function to reverse a word*/
let newWord =''
function reverseWord(word){	
	for(j=word.length - 1; j>=0 ; j-- ){			
		newWord= newWord + word[j];
	}
	console.log(newWord)
	return newWord
}
console.log('\nQuestion 1')
reverseWord('hello')
reverseWord('world')
/*OUTPUT

Question 1
olleh
ollehdlrow
*/