/*var names = 'Tayyab'
console.log(names);


// coding challenge 3 

function tipCalculator(bill) {

	var percentage ;
	if (bill < 50) {
		percentage = .2;

	}else if (bill >=50 && bill < 200) {
		percentage = .15;
	}else  {
		percentage = .1;
	}
	return percentage*bill;

}

var bills = [124 , 48 , 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0] ,bills[1]+ tips[1] ,bills[2] + tips[2] ];

                                 
                                     

console.log(tips, finalValues);


*/
/*
 var john = {
	fullName : 'John Smith',
	mass : 25  ,
	height : 25 ,
};

var mike = {
    fullName : 'Mike Smith',
	mass : 26  ,
	height : 26 ,
};

calBmi : bmi (mass , height) {

	return mass/height*height;
}

 if (john.calBmi > mike. calBmi) {
 	console.log (john has greater bmi );
 	else 
 		console.log (mike has greater bmi );
 }
 */

// loops and iteration

for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (i = 1; i < 20; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', 'false', 'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

const x = 23;

console.log(x);
