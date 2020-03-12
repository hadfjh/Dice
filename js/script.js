// JavaScript Document
/*Variable naming rules.
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age =28;

var fullAge = true;
console.log(fullAge);


var job;
console.log(job);

job = 'Teacher'; 
console.log(job);





var_3years=3;
var johnMark ='John and Mark';
var if = 23;
/*Variables and data types*/
/* right above the*/ 


//Type coercion 
//var firstName = 'John';
//var age = 28;


//var job, isMarried;
//job = 'teacher';
//isMarried = false;``

//console.log(firstName + 'is a '+age+ 'year old' +job+'.is he married?' +isMarried);
//Variable mutation
//age = 'twenty eight ';
//job = 'driver';
//alert(firstName + 'is a '+age+ 'year old' +job+'.is he married?' +isMarried);


//var lastName = prompt(' What is his last Name?');
//console.log(firstName+''+ lastName);


/********************
Basic operators
*/
//var year, yearJohn, yearMark;
//
//ageJohn= 28;
//
//ageMark= 33;


//Math operators
//now = 2020;
// yearJohn = now - ageJohn;
//
// yearMark = now - ageMark;
//console.log(yearMark);
//
//console.log(year+2);
//console.log(now * 2);
//console.log(now / 10);
//
//
////Logical operators
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);
//
//
//typeof operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(typeof 'Mark is older then John');
//var x;
//console.log(typeof x);



/************************
Operators
*/
//var now = 2020;
//var yearJohn = 1992;
//var fullAge = 18;



//Multiple operators
//var isFullAge = now - yearJohn >= fullAge;
//console.log(isFullAge);


//Grouping
//var ageJohn = now - yearJohn;
//var ageMark = 33;
//var average = (ageJohn + ageMark) / 2;
//console.log(average);



/* If / else statements
*/

//var firstName = 'John';
//var isMarried = false;
//if (isMarried) {
//console.log(firstName + ' is married!');
//} else {
//console.log(firstName + ' will hopefully marry soon :)');
//}
/*/***************************
var age = 16;

age >= 20;  // => false
age < 30;   // => true
!(age < 30); // => false

age >= 20 && age < 30;  // =>
age >= 20  || age <30;  // =>

/**************************
Boolean logic
*/
/*********
var firstName = 'John';
var age = 20;

if (age < 13)  {
console.log(firstName + ' is a boy.');	
}
else if (age >= 20 && age < 30){
	console.log(firstName + 'is a young man.');
}
else {
	console.log(firstName + ' is a man.');
}



/******************************
The Ternary Operator and Swith Statements
*/
//var firstName = 'John';
//var age = 16;

//age >=21 ? console.log(firstName + ' is old enough to drink beer.')
//: console.log(firstName + 'drinks juice.');

//var drink = age >= 21 ? 'beer' : 'juice';
//: console.log(drink);

//}




/**********************************************
Functions
*/
/**********
function calculateAge(birthyear) {
	return 2020 - birthyear;
  
	var ageJohn = calculateAge(1992);
	console.log(ageJohn);


function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year)
	var retirement = 65 - age;
	 console.log(firstName + 'retires in' + 'retirement' + 'years.'); 
}

yearsUntilRetirement(1992 + 'John');
yearsUntilRetirement(1948, + 'Mike');
yearsUntilRetirement(1975 + 'Kim');
 //Function expression

if 	
	
var whatDoYouDo = function(job, firstName) {
}
    switch (jpb) {
			
		case 'teacher' :
			return firstName + 'teaches kids how to code.';
			case 'driver' ;
			return firstName + 'drives an uber to Marietta.';
		case 'designer':
			return firstName + 'designs beautirul websites.';
		default:
			return firstName + 'does something else.';
	}
			
			
	}

console.log(whatDoYouDo('teacher', 'John'))
	console.log(whatDoYouDo('designer', 'Kim'))
		console.log(whatDoYouDo('retired', 'Mark'));

*/


/******************************************
Arrays
*/
//Initaialize new array
/**var names = [' John', 'Mark' , 'Kim'];
var years = new Array(1990, 1969, 1948);

//Mutate array
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith','1990','teacher','false'];

john.push('blue');
console.log(john);

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer',
	
	console.log(isDesigner);

['John', 'Smith', '1990','teacher','false'];``
*/


/********************************************
Objects and Propeties
*/
/*************
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: '1990',
	family: ['Kim','Mark','Michael','Emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[' x']);
console.log(x);

var Kim = new Object();
Kim.firstName= 'Kim';
Kim.lastName= 'Harris';
Kim.birthYear= '1999';
Kim[' lastName']= 'Harris';
console.log(Kim);

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: '1990',
	family: ['Kim','Mark','Michael','Emily'],
	job: 'teacher',
	isMarried: false`
};


var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: '1990',
	family: ['Kim','Mark','Michael','Emily'],
	job: 'teacher',
	isMarried: false,
	calAge: function(birthYear){return 2020 - birthYear;}
	

	
}
/*********************************************
Loops and iteration
*/


//i = 0, 0 < 10 true, log i to the console, i ++
//i = 1, 1 < 10 true, log i to the console, i ++
//...
//i = 9, 9 < 10 true,log i to console, i ++
//i = 10, 10 <10 FALSE, exis the loop!

var john = ['John', 'Smith', '1990', 'designer', 'false', 'blue'];
for(var i = 0; i <john.length; i++){
	console.log(john[i]) ;
}
 






