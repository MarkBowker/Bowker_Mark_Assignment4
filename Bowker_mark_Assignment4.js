//alert("JavaScript works!");

//Mark Bowker
// SDI 1501
//Assignment 4: Functions

//GLOBAL VARIABLES

var url;
var newDecimal;
var stringNum;
var getNext;
var capIt;
var hrsReturned;
var newString;

// String Function for URL 

function isUrl (phrase) {
	var comparison1 = phrase.indexOf("http://")
	var comparison2 = phrase.indexOf("https://")                                
		if (comparison1 != -1 || comparison2 != -1) {
  		return true;
		} else {
  			return false;
			}		
};


//MATH FUNCTION: CHANGE DECIMAL PLACES

function changeDec(num, decPlaces) {
	var places = Math.pow(10,decPlaces);
	num = Math.round(num * places) / places;
	return num;
};


//Math Function: change string into number

function numberWord (number) {
	var ans = parseInt(number);
	return ans;
};

//Function to get next number in the array

function getNextNumber (array, number) {
	for (var i = 0; i < array.length; i++) {
    	if (array[i] > number) {
        return array[i];
		}
	}
	return "either too big or too small, please double check what you have entered!"
};

// FUNCTION FOR DATE DIFFERENCE

function dateDif (date1,date2) {
	var date1 = new Date(date1)
	var date2 = new Date(date2)
	var dif = date2 - date1
	var hrs = dif / 1000/ 60 / 60 
	return hrs;

};

//FUNCTION TO CAP FIRST LETTER

function capFirstLetter(string){
  var stringArray = string.split(" ");
  var newArray = [];
  for(var i = 0 ; i < stringArray.length ; i++ ){
	 var first = stringArray[i].charAt(0).toUpperCase();
     var rest = stringArray[i].slice(1);
	 newArray[i] = first + rest;
	 newString = newArray.join(' ')
  }
  	return newString;
};

// MAIN CODE

//URL FUNCTION

url = isUrl("http://www.apple.com")
	if (url === true) {
	console.log("This phrase is a URL!")
		} else {
		console.log("This phrase is not a URL!")			
}


//CHANGE DECIMAL FUNCTION

newDecimal = changeDec(2.345676, 4)
console.log("The new number is now " + newDecimal)


// NUMBERWORD FUNCTION

stringNum = numberWord("45")
console.log(stringNum + " is now a number! See, we can add it to another number. " + stringNum + " + 10 = "+ (stringNum + 10))


//GET NEXT NUMBER FUNCTION

getNext = getNextNumber([1,4,8,12,14], 8)
console.log("The next highest number in the sequence is " + getNext)


// DATE DIFFERENCE FUNCTION

hrsReturned = dateDif("2014, 01, 20", "2014, 01, 25" )
console.log("The difference between these two dates is " + hrsReturned + " hrs!")


// CAPITALIZE FIRST LETTER FUNCTION

capIt = capFirstLetter("thank God this is the last one!")
console.log(newString)


