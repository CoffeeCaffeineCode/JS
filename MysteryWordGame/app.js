//Mystery Word Game
/*
To play:
node cli.js --difficulty easy/hard

For help:
node cli.js -h

*/
const mystery_words = require ('./mystery_words')
const prompt = require('prompt')
module.exports.run = (flags) => {
    if (flags.difficulty)
    	setDifficulty(flags.difficulty)
}
const setDifficulty = (level) => {
	if(level =='easy'){
		gameLevel ='easy'
		const easyWord = mystery_words.easy[ Math.floor(Math.random()* (mystery_words.easy.length))].toLowerCase()
		play(easyWord)
	}
	else if(level == 'hard'){
		gameLevel ='hard'
		const hardWord = mystery_words.hard[ Math.floor(Math.random()* (mystery_words.hard.length))].toLowerCase()
		play(hardWord)
	}
}
// Those declared let are going to change multiple times
let guessedArray=[]
let guessLimit = 4
let gameLevel=''
let tempchar= ''
let letterCount = {}
let characters =''
let once=[]
let twice=[]
let thrice=[]
//Get Input
const promptGet = (word,tempWord) =>{	
	prompt.start()
	console.log('\x1b[33m','Options:\n -h    A Hint\n -g    Guessed Letters\n -n      Number of Guess Left\n Or Enter Your Guess ;)')
	prompt.get('input', (err, result) =>{
		if(err){
			console.log(err)
		}
		tempchar = result.input
		if(tempchar == '-h')
			hint(word,tempWord)
		else if(tempchar == '-g'){
			console.log('\x1b[34m','Guessed Letters = ',guessedArray)
			promptGet(word,tempWord)
		}
		else if(tempchar == '-n'){
			console.log('\x1b[33m','Number of Guess Left ='+ guessLimit)
			promptGet(word,tempWord)
		}	

		else if(word.includes(tempchar)){
			guess(word,tempchar, tempWord)			
		}
		else{
			console.log ('\x1b[31m','Does Not Contain Letter '+ tempchar + ' !' )
			guessedArray.push(tempchar)
			guessLimit -= 1
			if(guessLimit>0){
				promptGet(word,tempWord)
			}
			else{
				console.log('\x1b[31m','----------------GAME OVER----------------') 
				promptEnd()
			}
		}
	})
}
//Get Hints
const hint = (word,tempWord)=>{
		let j=0
		if(once.length>=1){
			tempWord[once[j]] =once[j]
			delete letterCount[once[j]]
			once.shift()
		}
		else if(twice.length>=1){
			for(m=2; m<4; m++){
				if(twice[j]+m in tempWord){
					tempWord[twice[j]+m] = twice[j]	
				}
			}
			tempWord[twice[j]] =twice[j]
			delete letterCount[twice[j]]
			twice.shift()
		}
		else if(thrice.length>=1){
			for(m=2; m<4; m++){
				if(thrice[j]+m in tempWord){
					tempWord[thrice[j]+m] = thrice[j]	
				}
			}
			tempWord[thrice[j]] =thrice[j]
			delete letterCount[thrice[j]]
			thrice.shift()
		}
		console.log('\x1b[33m',Object.values(tempWord).join().split(',').join(''))
		if(Object.keys(letterCount).length==0){
			console.log('\x1b[31m','----------------GAME OVER----------------You Used a Hint For Last Letter! ---------')
			promptEnd()
		}
		else	
			promptGet(word,tempWord)
}
// Letters Guessed 
const guess = (word,tempchar,tempWord)=>{
		if(tempchar in tempWord){
			tempWord[tempchar] = tempchar
			delete letterCount[tempchar]
			for(m=2; m<10; m++){
				if(tempchar+m in tempWord)
					tempWord[tempchar+m] = tempchar
			}
			if(once.indexOf(tempchar)> -1){
				once.splice(once.indexOf(tempchar), 1)
			}
			else if(twice.indexOf(tempchar)> -1){
				twice.splice(twice.indexOf(tempchar), 1)
			}
			else if(thrice.indexOf(tempchar)> -1){
				thrice.splice(thrice.indexOf(tempchar), 1)
			}				
		}
		console.log('\x1b[33m',Object.values(tempWord).join().split(',').join(''))
		//check if - exist in the array of tempWord values
		if(Object.values(tempWord).indexOf('-')> -1){
			promptGet(word,tempWord)
		}
		else
		{
			console.log('\x1b[32m','<<<<<< CONGRATULATIONS! >>>>>>>\n------------YOU WON--------------')
			promptEnd()					
		}			
}
//End of game question
const promptEnd = ()=>{
	console.log('Play Again? ;) (y or n)')
	prompt.get('play', (err, result) =>{
		if(err){
			console.log(err)
		}
		switch(result.play){
			case 'y':
				setDifficulty(gameLevel)
				break;
			case 'n':
				console.log('\x1b[33m','SEE YOU :)')
				break;
		}
	})		
}
//Main Game Method
const play = (word) => {	
	// split the word into characters and then check how many times it appeared in the string
	//put - instead of the letters
	tempWord = {}
	characters =''
	guessLimit = 4
	guessedArray=[]
	once =[]
	twice=[]
	thrice=[]
	letterCount={}
	characters = word.split("")		
	for(j=0; j<characters.length; j++){
		if(letterCount[characters[j]]){
			letterCount[characters[j]]++
			tempWord[characters[j]+letterCount[characters[j]]] = '-'
		}
		else{
			letterCount[characters[j]] = 1
			tempWord[characters[j]] = '-'
		}
	}	
	//
	let letterKey= Object.keys(letterCount)	
	for(n=0;n<Object.keys(letterCount).length;n++){
		if(letterCount[letterKey[n]]==1){
			once.push(letterKey[n])
		}
		else if(letterCount[letterKey[n]]==2){
			twice.push(letterKey[n])
		}
		else if(letterCount[letterKey[n]]==3){
			thrice.push(letterKey[n])
		}
	}
	console.log('\x1b[33m',Object.values(tempWord).join().split(',').join(''))
	/*//shows the word
	console.log(word)*/
	promptGet(word,tempWord)
}
