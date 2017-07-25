const
	dir = require('node-dir')
	treeify = require('treeify')
	crypto = require('crypto')
	fs= require('fs')
	yargs = require('yargs')
	.argv
let
	hashArray =[]
	pathArray = []
	treeObject = {}
//hashFile Function goes through the directory and Hashes the files 
//and then compares the hashes and prints the Tree
// learned how to read files using this link https://www.npmjs.com/package/node-dir  
const hashFile = (directoryPath) =>{
	dir.readFiles(directoryPath, (err, content, file, next) => {
		if(err) console.log(err)
		const cry = crypto.createHash('sha256')
		const read = fs.ReadStream(file)
		read.on('data', (dig) =>{cry.update(dig)})
		read.on('end', () =>{
			const dig = cry.digest('hex')
			hashArray.push(dig)
			pathArray.push(file)
			next()			
		})
	}, (err) =>{
		if(err) console.log(err)
		for(i=0; i<hashArray.length; i++){
			for(j= i+1; j<hashArray.length; j++)
				if(i!=j){
					if(hashArray[i]==hashArray[j]){
						const tempobj ={}
						tempobj[pathArray[j]]=pathArray[j]
						treeObject[pathArray[i]]=tempobj
					}
				}
		}
		console.log('\nThe following duplicates were found: \n')
		console.log(treeify.asTree(treeObject))
	})
}
//GET DIRECTORY
const directoryPath = (yargs._).join()
hashFile(directoryPath)

/*Output Lab
N:\CSULA\CS4220\lab>node duplicate-search.js ./duplicate-search

The following duplicates were found:

├─ duplicate-search\one.txt
│  └─ duplicate-search\sub-folder\three.txt
└─ duplicate-search\sub-folder\another-folder\four.txt
   └─ duplicate-search\two.txt

*/