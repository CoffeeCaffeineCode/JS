//letter Evaluation to resolve lowercase letters and reject uppercase letters
const letterEvaluation =(letter) =>{
	return new Promise((resolve,reject) =>{
		// (if the letter equals its lowerCase that means its lowercase if not means its uppercase )
		if(letter === letter.toLowerCase())
			resolve(`this letter was resolved: ${letter}`)
		else
			reject(`this letter was rejected: ${letter}`)
	})
}
const sortLetters = (letters)=> {
	/*letters.forEach((letter) =>{
		letterEvaluation(letter)
			.then((result) =>{
				console.log(result)
			})
			.catch((result) =>{
				console.log(result)
			})
	})
	//if you use it instead of promises and Promis.all the output will be first resolved and then rejected
	this letter was resolved: b
	this letter was resolved: c
	this letter was resolved: e
	this letter was rejected: A
	this letter was rejected: D
	*/
	const promises = letters.map((letter) =>{
		return letterEvaluation(letter).catch((err) =>{
			return err
		})
	})
	Promise.all(promises)
		.then((results) => {
		//.join() to join all the elements of the array to string 
		// you can have any character instead of \n 
			console.log(results.join('\n'))
		})
}
const letters = ['A','b','c','D','e']
sortLetters(letters)
/*Output
this letter was rejected: A
this letter was resolved: b
this letter was resolved: c
this letter was rejected: D
this letter was resolved: e
*/
