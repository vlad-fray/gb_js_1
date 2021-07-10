'use strict';
//HW_2
//Task 1
console.log('Task 1');
var a = 1,
	b = 1,
	c,
	d;
c = ++a;
console.log(c); // 2
// сначала инкремент а, затем присвоение с, а === 2
d = b++;
console.log(d); // 1
// сначала присвоение d, затем инкремент b, b === 2
c = 2 + ++a;
console.log(c); // 5
// сначала инкремент а, затем сложение с 2,
// после присвоение с, a === 3
d = 2 + b++;
console.log(d); // 4
// сначала 2 + b, затем присваивание, после инкремент,
// b === 3
console.log(a); // 3
console.log(b); // 3

//Task 2
console.log('Task 2');
var a = 2;
var x = 1 + (a *= 2);
// сначала a**2, теперь а === 4, которая возвращается на место
// выражения в скобках, а после происходит сложение и присваивание
console.log(x);

// Task 3
console.log('Task 3');
let numA = Math.floor(Math.random() * 20) - 10;
let numB = Math.floor(Math.random() * 20) - 10;
console.log(numA, numB);
if (numA >= 0 && numB >= 0) console.log(numA - numB);
else if (numA < 0 && numB < 0) console.log(numA * numB);
else console.log(numA + numB);

// Task 4
console.log('Task 4');
let nA = Math.floor(Math.random() * 16);
console.log('a = ' + nA);
switch (nA) {
	case 0:
		console.log(0);
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(7);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	case 15:
		console.log(15);
	default:
		break;
}

// Task 5
const numSum = (a, b) => {
	return a + b;
};
const numSub = (a, b) => {
	return a - b;
};
const numDiv = (a, b) => {
	return a / b;
};
const numMult = (a, b) => {
	return a * b;
};

// Task 6
const mathOperation = (arg1, arg2, operation) => {
	switch (operation) {
		case 'addition':
			return numSum(arg1, arg2);
		case 'substraction':
			return numSub(arg1, arg2);
		case 'division':
			return numDiv(arg1, arg2);
		case 'mltiplication':
			return numMult(arg1, arg2);
		default:
			break;
	}
};
console.log('Tasks 5-6');
console.log('Using nums: ', numA, numB);
console.log(mathOperation(numA, numB, 'addition'));
console.log(mathOperation(numA, numB, 'substraction'));
console.log(mathOperation(numA, numB, 'division'));
console.log(mathOperation(numA, numB, 'mltiplication'));

// Task 7
console.log('Tasks 7');
console.log(null == 0);
//false, потому что null == undefined, и ничему больше
console.log(null === 0);
//false, потому что строгое сравнение без приведения типов
console.log(null >= 0);
console.log(null <= 0);
//true, потому что null приводится к типу число, и равен 0

//Task 8
console.log('Task 8');
const power = (val, pow) => {
	if (pow === 1) return val;
	return val * power(val, pow - 1);
};
console.log('3**3 = ' + power(3, 3));

/*
// HW_1
// Task 1
const TC = +prompt('Введите температуру в Цельсиях', '0');
if (TC !== undefined)
	alert(
		`${((9 / 5) * TC + 32).toFixed(
			2
		)} градусов по Фаренгейту`
	);
else alert('Wrong number');

//Task 2
let admin = null;
let name = null;
name = 'Василий';
admin = name;
alert(admin);

//Task 3
// Произойдет преобразование числа к строке, а затем конкатенация строк 

console.log(1000 + '108');

//Task 4
// defer - исполнение скрипта после загрузки страницы
//async - исполнение скрипта после загрузки скрипта
 */
