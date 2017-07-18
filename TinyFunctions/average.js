//Average of an Array of integers and string value integers
let sum=0
let avg=0
let num=[]
let numberlength=0
function averageArray(numbers){
	//checking the whole array and if any of them are string value integer then convert them to number
	for (i=0; i<numbers.length; i++){
		for(j=0; j<=100; j++){
			//if a string == a number it means its string value integer
			if(numbers[i]==j){
				numbers[i]=parseInt(numbers[i])
				//to keep track of the length of the numbers in the array
				num.push(numbers[i])
				sum = sum + numbers[i]	
			}
		}
	}
	numberlength= num.length
	avg =sum/numberlength
	console.log(avg)	
}
averageArray([3,9,'hello',4,'95','abc','1',8,{key:'value'}])

/*OUTPUT
20
*/