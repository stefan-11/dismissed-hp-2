
console.log("hello world");

var fs = require('fs');
var path = require('path');

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


var galleryFolder = process.argv[2];
console.log("galleryFolder: "+galleryFolder);

var targetFile = process.argv[3];
console.log("targetFile: "+targetFile);

//read list of directories
var dirList = getDirectories("../galleries");
dirList.sort();
console.log(dirList);


var galleriesObject = new Object();


//loop the directories and build the galleryObject
for (var i=0; i<dirList.length; i++){

	var currDir = dirList[i];
	currDir = galleryFolder + "/" + currDir;
	console.log("currDir: "+currDir);

	//read list of files
	var fileList = getFilesByDirectory(currDir);
	fileList.sort();
	console.log(fileList);


}



