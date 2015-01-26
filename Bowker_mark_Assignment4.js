//alert("JavaScript works!");

//Mark Bowker
// SDI 1501
//Assignment 4: Functions

// String Function for URL function #5

function isUrl (phrase) {
	var comparison1 = phrase.indexOf("http://")
	var comparison2 = phrase.indexOf("https://")                                
		if (comparison1 != -1 || comparison2 != -1) {
  		console.log("This phrase is a URL!");
		} else {
  			console.log("This is not a URL!")
			}
		
};

isUrl("https://ww.look.com")