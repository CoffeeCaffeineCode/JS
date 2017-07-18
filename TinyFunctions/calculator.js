//Calculator
class Calculator{
	constructor(number=0){
		this.number = number
	}
	multiply(num){
		this.number = this.number*num
		//console.log(this.number)
		return this
	}
	add(num){
		this.number = this.number+num
		return this
	}
	divide(num){
		this.number= this.number/num
		return this
	}
	substract(num){
		this.number= this.number-num
		return this
	}

	get print(){
		console.log(this.number)
		//Don't forget to have return for get ...()
		return this
	}
	clear(){
		this.number= 0
		return this
	}
}
const calculator_v1 = new Calculator(2)
calculator_v1
	.multiply(3)
	.add(10)
	.divide(2)
	.substract(4)
	.print
	.clear()
	.print
const calculator_v2 = new Calculator()
calculator_v2
	.multiply(3)
	.add(10)
	.divide(2)
	.substract(4)
	.print
	.clear()
	.print

/*Output
4
0
1
0
*/