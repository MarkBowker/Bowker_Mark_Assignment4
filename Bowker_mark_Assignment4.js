//alert("JavaScript works!");

//Mark Bowker
// SDI 1501
//Assignment 4: Functions

// String Function for URL 

function isUrl (phrase) {
	var comparison1 = phrase.indexOf("http://")
	var comparison2 = phrase.indexOf("https://")                                
		if (comparison1 != -1 || comparison2 != -1) {
  		console.log("This phrase is a URL!");
		} else {
  			console.log("This is not a URL!")
			}		
};

// String replace function

function stringReplace () {
	var str1 = "a,b,c,d";
	var str2 = /,/g;
	var str3 = "/";
	var newStr1 = str1.replace(str2, str3);
	console.log(newStr1);	
};

