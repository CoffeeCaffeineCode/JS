
//Markup Value
let percentage=0
let newcar={
	cars :[],
	total:0
}
let totalMark=0
let name =''
let calculated=[]
function markupValue(car,percent){
	for (i=0; i<car.length; i++){
		percentage=car[i].wholesale * (percent/100)
		//filling the new car object
		name = car[i].type
		calculated[i]= car[i].wholesale+percentage
		newcar.cars.push({ [name]: calculated[i] })
		//total markup percentages of all cars
		totalMark=totalMark+percentage
	}
	newcar.total=totalMark
	console.log(newcar)
}
const cars = [
	{type: 'hybrid', wholesale: 25000},
	{type: 'minivan', wholesale:28000},
	{type: 'sedan', wholesale:31500},
	{type:'convertible', wholesale:45750}
]
markupValue(cars, 10.5)
/*OUTPUT
{ cars:
   [ { hybrid: 27625 },
     { minivan: 30940 },
     { sedan: 34807.5 },
     { convertible: 50553.75 } ],
  total: 13676.25 }
*/