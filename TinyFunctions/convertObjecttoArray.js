//ConvertObjecttoArray
const arr = []
const convertToArray = (obj) =>{
	const keyArr=Object.keys(obj)
	const valArr=Object.values(obj)
	keyArr.forEach((key,kIndex)=>{
		valArr.forEach((value,valIndex)=>{
			if(kIndex===valIndex){
				arr.push([key,value])
			}
		})
	})
	console.log(arr)
}
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj)
/*Output
[ [ 'media', 'facebook' ],
  [ 'company', 'github' ],
  [ 'likes', 58445 ] ]
*/