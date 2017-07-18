//Convert array to object
const obj = {}
const convertToObject= (arr) =>{	
	arr.forEach((item) =>{
		obj [item[0]]= item[1]
	})
	console.log(obj)
}
const media_arr = [['media', 'facebook'],['company', 'github'],['likes', 58445]]
convertToObject(media_arr)

/*Output
{ media: 'facebook', company: 'github', likes: 58445 }
*/
