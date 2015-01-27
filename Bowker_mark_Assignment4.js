//alert("JavaScript works!");

//Mark Bowker
// SDI 1501
//Assignment 4: Functions

//GLOBAL VARIABLES

var url;
var newString;
var newDecimal;
var stringNum;
var getNext;

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

// String replace function


function stringReplace () {
	var str1 = "a,b,c,d";
	var str2 = /,/g;
	var str3 = "/";
	var newStr1 = str1.replace(str2, str3);	
	return newStr1;
};

newString = stringReplace()



//Math Function: Change Decimal

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
    	//console.log(array[i])
        return array[i];
		}
	}
	return "either too big or too small, please double check what you have entered!"
};



// MAIN CODE

//Url Function

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

getNext = getNextNumber([1,4,8,12,14], 15)
console.log("The next highest number in the sequence is " + getNext)




