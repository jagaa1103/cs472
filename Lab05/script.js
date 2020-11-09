function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED. Expected " + expected + " found " + found;
    }
}

function myFunctionTestForArray(expected, found) {
    var counter = 0;
	for (var i=0; i < expected.length;i++) {
		if (expected[i] !== found [i]) {
			counter ++;
		}
	}
	if (counter === 0) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED. Expected " + expected + " found " + found;
	}
}



function max(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
    if (num1 > max(num2, num3)) return num1;
    else return max(num2, num3);
}

function isVowel(character) {
    if (character.length > 1) return false;
    return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) !== -1
}

function sum(nums) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

function multiply(nums) {
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
}

function reverse(word) {
    return word.split("").reverse().join("");
}

function findLongestWord(words) {
    var result = "";
    for (var i = 0; i < words.length; i++) {
        if (result.length < words[i].length) result = words[i];
    }
    return result.length;
}

function filterLongWords(words, i) {
    var result = [];
    for (var j = 0; j < words.length; j++) {
        if (i < words[j].length) result.push(words[j]);
    }
    return result;
}


/* return multiply each element by 10 */ 
function multiplyBy10 (myArray){
	const returnArray = myArray.map(function(element , i, array){
		return element * 10;
	})
	return returnArray;
}

/* return array with all elements equal to 3 */ 
function arrayEqual3 (myArray){
	const returnArray = myArray.filter(function (element){
		return element === 3;
	})
	return returnArray;
}

/* return the product of all elements */ 
function productOfAllElements (myArray){
	const returnArray = myArray.reduce(function (preValue, element, index, array){
		return preValue * element;
	})
	return returnArray;
}




console.log ("Expected output of maxOfTwo (10,20) is 20 " + myFunctionTest (20, max(10,20)));
console.log ("Expected output of maxOfThree (10,20,30) is 30 " + myFunctionTest (30, maxOfThree(10,20,30)));
console.log ("Expected output of if input is vowel ( a ) is true " + myFunctionTest (true, isVowel('a') ));
console.log ("Expected output of sum ([10,20,30]) is 60 " + myFunctionTest (60, sum([10,20,30])));
console.log ("Expected output of sum ([1,2,3,4]) is 24 " + myFunctionTest (24, multiply([1,2,3,4])));
console.log ("Expected output of reverse ('jag testar') is 'ratset gaj' " + myFunctionTest ("ratset gaj", reverse("jag testar")));
console.log ("Expected output of longest word (['this','is','JavaScript','yes']) is 10 " + myFunctionTest (10, findLongestWord(["this","is","JavaScript","yes"])));
console.log ("Expected output of words (['this','is','JavaScript','yes'], 3) is this,JavaScript " + myFunctionTestForArray (["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)));
console.log ("Expected output of array ([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])));
console.log ("Expected output of array ([1,3,5,3,3]) is [3,3,3] " + myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])));
console.log ("Expected output of array ([1,3,5,3,3]) is 135 " + myFunctionTest (135, productOfAllElements([1,3,5,3,3])));





function testMax() {
    console.assert(max(10,20) === 20, "Output should be 20");
}

function testMaxOfThree(){
	console.assert(maxOfThree(10,20,30) === 30 , "Output should be 30")	;
}

function testIsVowel(){
	console.assert(isVowel('a') === true, "Output should be true");
}

function testSumValue(){
	console.assert(sum([10,20,30]) === 60, "Output should be 60");
}

function testMultiplyValue(){
	console.assert(multiply([1,2,3,4]) === 24, "Output should be 24");
}

function testReverseValue(){
	console.assert(reverse("jag testar") === "ratset gaj", "Output should be 'ratset gaj'");
}

function testLongestWord(){
	console.assert(findLongestWord(["this","is","JavaScript","yes"]) === 10, "Output should be 10");
}

function testArrayWordsValues(){
	console.assert(myFunctionTestForArray(["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)) === "TEST SUCCEEDED", "Output should be ['this,JavaScript']");
}

function testMultiplyBy10(){
	console.assert(myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [10,30,50,30,30]");
}

function testEqualWith3(){
	console.assert(myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [3,3,3]");
}

function testProductsOfAllElements(){
	console.assert(myFunctionTest (135, productOfAllElements([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be 135");
}


testMax();
testMaxOfThree();
testIsVowel();
testSumValue();
testMultiplyValue();
testReverseValue();
testLongestWord();
testArrayWordsValues();
testMultiplyBy10();
testEqualWith3();
testProductsOfAllElements();