/**
 * Creates thumbnails of the images in the given folder
 * Thumbnails are placed in a 'thumbs' folder.
 * If not existing the thumbs folder is created.
 * 
 * 1. Install node
 * 2. npm install
 *
 * node create-thumbs-in-subfolder.js ../Dismissed-Homepage/galleries/2022-06-12-testfolder/
 */


const fs = require('fs');
const imageThumbnail = require('image-thumbnail');

let imageDir;



process.argv.forEach(function (val, index, array) {
  //console.log(index + ': ' + val);
  if (index === 2) {
  	imageDir = val;
  }
});
console.log(imageDir);




async function createThumb(sourceFile, targetFile){
	

	try {

		const options = {
			"height": 200,
			"width": 300,
			"fit": "cover"
		};

	    const thumbnail = await imageThumbnail(sourceFile, options);
	    //console.log(thumbnail);

	    //console.log(targetFile);
	    fs.writeFileSync(targetFile, thumbnail);

	} catch (err) {
	    console.error(err);
	}
}


//TODO: check if a thumbs folder already exists, create it if it doesn't
// directory to check if exists
const thumbsDir = imageDir + '/thumbs';

// check if directory exists
if (fs.existsSync(thumbsDir)) {
    console.log('thumbs directory exists!');
} else {
	console.log('thumbs directory doesnt exist');

	//create thumbs directory
	fs.mkdirSync(thumbsDir);
	console.log(`thumbs directory ${thumbsDir} created.`);
}


//TODO: get list of image files (*.jpg)
imageArray = [];
fs.readdirSync(imageDir).forEach(file => {
	const lowerCaseFilename = file.toLowerCase();
	if (lowerCaseFilename.endsWith('.jpg')) {
		imageArray.push(file);	
	}
});
console.log(imageArray);



//TODO: create thumbs and write them into the thumbs folder
imageArray.forEach(imageFile => {
	const sourceFile = imageDir + '/' + imageFile;
	const targetFile = thumbsDir + '/thumb-' + imageFile;
	createThumb(sourceFile, targetFile);
});


