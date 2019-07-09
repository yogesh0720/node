const name = 'Max';

let age = 29;

if(age === '29') {
	console.log('a');
} else {
	console.log('b');
}

const hasHobbie = true;

//name = 'MAaaaaaaaaaaaa';
//age = 30;
//hasHobbie = false;

/*function summarizeUser (userName, userAge, useHobbies) {
	return (
		'userName is  ' +
		userName +
		', userAge is  ' +
		userAge +
		', useHobbies is  ' +
		useHobbies
		);
}*/

/*const summarizeUser = (userName, userAge, useHobbies) {
	return (
		'userName is  ' +
		userName +
		', userAge is  ' +
		userAge +
		', useHobbies is  ' +
		useHobbies
		);
}*/

const summarizeUser = (userName, userAge, useHobbies) => {
	return (
		'userName is  ' +
		userName +
		', userAge is  ' +
		userAge +
		', useHobbies is  ' +
		useHobbies
	);
}


const add = (a,b) => a+b;

const addRandom = ( ) => 1+3;

//.console.log(	add(1,2)	);
//console.log(addRandom()	);
//console.log(summarizeUser(name, age, hasHobbie));
//


const person = {
	name: 'Yogesh',
	age: 26,
	greet () {
		console.log('Hii, I am '+ this.name);		
	}
}

//person.greet();
//

const printName = ({name, age}) => {
	console.log(name, age);
}

printName(person);




const hobbies = ['a', 'b', 'c'];
// for(let hobby of hobbies) {
// 	console.log(hobby);
// }
// 

/*console.log(hobbies.map(hobby => {
	return 'hobby: ' + hobby;
}));*/

hobbies.push('Prograaming');
//console.log(hobbies);
//

const cpPersion = {...person};
console.log(cpPersion);


const cpArr = [...hobbies];
console.log(cpArr);


const toArray = (...args) => {
	return args;
}

console.log(1,2,3,4);



////////////////

const fetchData = callback => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done');
		}, 1500);	
	});
	return promise;	
};

setTimeout(() => {
	console.log('Timee is done!');
	fetchData()
	.then(text => {
		console.log(text);
		return fetchData;
	})
	.then(text2 => { 
		console.log(text2); 
	})
}, 2000);

console.log('Hello');
console.log('Hii');
