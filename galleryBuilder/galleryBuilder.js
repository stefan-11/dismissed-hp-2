/* 


1. Installation von node.js
2. Installation von image-size
	npm install image-size --save


Execute the script like this:
node galleryBuilder.js ../galleries target.js


*/




console.log("hello world");

var fs = require('fs');
var path = require('path');
var sizeOf = require('image-size');

/* functions */
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getFilesByDirectory(srcDir){
	var files = fs.readdirSync(srcDir);
	return files;
}


// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});


console.log("hello");


var galleryFolder = "../galleries"; //process.argv[2];
console.log("galleryFolder: "+galleryFolder);

var targetFile = process.argv[3];
console.log("targetFile: "+targetFile);

//read list of directories
var dirList = getDirectories("../galleries");
dirList.sort();
console.log(dirList);


var galleriesObject = new Array();

//imageId is global for all images
var imageId = 0;

//loop the directories and build the galleryObject
for (var i=0; i<dirList.length; i++){

	var currDir = dirList[i];
	currDir = galleryFolder + "/" + currDir;
	console.log("currDir: "+currDir);

	galleriesObject[i] = new Object();
	var currGalleriesObject = galleriesObject[i];

	//remove ../galleries/ from the folder
	var dirPattern = /..\/galleries\//i;
	var folder = currDir.replace(dirPattern, "");
	console.log("folder: "+folder);

	currGalleriesObject.folder = folder; //currDir;
	currGalleriesObject.headline = folder; //currDir;
	currGalleriesObject.images = new Array();
	var imagesArray = currGalleriesObject.images;

	//sequenceIndex is per gallery
	var sequenceIndex = 0;

	//read list of files
	var fileList = getFilesByDirectory(currDir);
	fileList.sort();
	console.log(fileList);

	for (var k=0; k<fileList.length; k++){
		var currFile = fileList[k];
		console.log("currFile: "+currFile);

		var currThumb = "thumb-"+currFile;
		console.log("currThumb:"+currThumb);

		var currFileWithPath = currDir + "/" + currFile;
		console.log(currFileWithPath);

		var currThumbWithPath = currDir + "/thumbs/" + currThumb;
		console.log(currThumbWithPath);

		// check if the file is a jpg, search function returns 0 if it is
		if (currFileWithPath.search(/.*jpg/i) == 0) {
			var dimensions = sizeOf(currFileWithPath);
			console.log(dimensions);

			//remove ../ from the path
			var pattern = /..\//i;
			var adjustedFileWithPath = currFileWithPath.replace(pattern, "");
			console.log("adjustedFileWithPath: "+adjustedFileWithPath);

			//remove ../ from the thumb path
			var pattern = /..\//i;
			var adjustedThumbWithPath = currThumbWithPath.replace(pattern, "");
			console.log("adjustedThumbWithPath: "+adjustedThumbWithPath);			

			imagesArray[sequenceIndex] = new Object();
			imagesArray[sequenceIndex].src = adjustedFileWithPath; // currFileWithPath;
			imagesArray[sequenceIndex].w = dimensions.width;
			imagesArray[sequenceIndex].h = dimensions.height;
			imagesArray[sequenceIndex].imageId = "image"+imageId;
			imagesArray[sequenceIndex].sequenceIndex = sequenceIndex;
			imagesArray[sequenceIndex].thumb = adjustedThumbWithPath;

			console.log(currGalleriesObject.images[k]);

			imageId++;
			sequenceIndex++;

		} else {
			console.log("no image: "+ currFileWithPath);
		};

		console.log("---");
	}

}

//console.log(galleriesObject);
//minified version
var json = JSON.stringify(galleriesObject);
//readable version
var json = JSON.stringify(galleriesObject, null, 4);

//console.log(json);

//now prepend the variable name before the json
json = "var galleriesObject = " + json;

var targetFileExists = fs.existsSync(targetFile);
//console.log(targetFileExists);

if (targetFileExists == true) {
	console.log("File "+targetFile+" already exists. Please choose another filename");
} else {
	console.log("Writing file "+targetFile);

	//fs.writeFileSync("test.json", )
	fs.writeFile(targetFile, json, function (err) {
	  if (err) throw err;
	  console.log('File saved!');
	});

};








