// Replace vowels with *
function replaceWord(word){
	let arrayWord = []
	let newWord =''
	const vowels=['a','e','i','o','u']
	//convert the string to an array
	for(i = 0 ; i<word.length ; i++){
			arrayWord[i]= word[i];
	}
	//replace the vowels in the array which is easier
	for(i = 0 ; i<= arrayWord.length-1 ; i++){
		for(j=0; j<vowels.length; j++){
			if(arrayWord[i] == vowels[j])
			{	
				arrayWord[i]='*'
			}
		}
	}
	//creating our new word by concatenating the array into string
	for(i=0; i<word.length;i++){
		newWord = newWord + arrayWord[i]
	}
	console.log(newWord)
	return newWord
	
}
replaceWord('javascript')
replaceWord('angular')

/*OUTPUT
j*v*scr*pt
*ng*l*r
*/

//using modules split, foreach and join
const replaceVowels = (word) =>{
	const wordArray = word.split('')
	const vowels = ['a','e','i','o','u']
	wordArray.forEach((letter,index) => {
		vowels.forEach((vowel) =>{
			if(letter === vowel){
				wordArray[index] = '*'
			}
		})
	})
	word = wordArray.join('')
	console.log(word)
}
console.log('************')
replaceVowels('javascript')
replaceVowels('angular')

/*Output
************
j*v*scr*pt
*ng*l*r
*/
