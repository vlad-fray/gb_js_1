'use strict';
//HW_5
//Task_1
const chess = document.querySelector('#chess');

const createChessBoard = function () {
	const chessContainer = document.createElement('div');
	Object.assign(chessContainer.style, {
		display: 'grid',
		gridTemplateColumns: 'repeat(9, 1fr)',
		gridTemplateRows: 'repeat(9, 1fr)',
		margin: '0 auto',
		width: '360px',
		minHeight: '100px',
		content: '',
	});
	chess.appendChild(chessContainer);

	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			const chessSquareArea = document.createElement('div');
			Object.assign(chessSquareArea.style, {
				height: '40px',
				width: '40px',
				boxSizing: 'border-box',
				textAlign: 'center',
			});
			if (row === 0 && col > 0)
				chessSquareArea.innerText = `${letters[col - 1]}`;
			else if (col === 0 && row > 0)
				chessSquareArea.innerText = `${row}`;
			else if ((col + row) % 2 === 1)
				chessSquareArea.style.backgroundColor = 'black';
			else if (col + row !== 0)
				chessSquareArea.style.border = '1px solid black';
			chessContainer.appendChild(chessSquareArea);
		}
	}
};
createChessBoard();

//Task_2-3
const catalogContainer = document.querySelector('#catalog');
const cart = {
	goods: [
		{ type: 'Boots', brand: 'Ricco', price: 3000 },
		{ type: 'Boots', brand: 'Nike', price: 6000 },
		{ type: 'Boots', brand: 'Adidas', price: 5600 },
	],
	totalPrice() {
		return this.goods.reduce((acc, good) => acc + good.price, 0);
	},
	printGoods(parentEl) {
		const html = this.goods
			.map(
				(good) =>
					`<p>Тип: ${good.type}, 
				брэнд: ${good.brand}, 
				цена: ${good.price} руб.</p>`
			)
			.join('');
		parentEl.insertAdjacentHTML('beforeend', html);
	},
	printTotalPrice(parentEl) {
		if (this.goods.length === 0) {
			parentEl.innerText = 'В корзине пусто';
			return;
		}
		parentEl.insertAdjacentHTML(
			'beforeend',
			`<p>В корзине: ${
				this.goods.length
			} товаров на сумму ${this.totalPrice()} рублей</p>`
		);
	},
};

cart.printGoods(catalogContainer);
cart.printTotalPrice(catalogContainer);

/* //HW_4
//Task 1
console.log('Task 1');
const nums = [13, -5, 5.4, 0, 500, 1015, 999];
const createNumObj = function (num) {
	if (!Number.isFinite(num) || num < 0 || num > 999) {
		console.log(`${num} не входит в искомую область [0, 999]`);
		return {};
	}
	const int = Math.floor(num);
	return {
		единицы: int % 10,
		десятки: Math.floor((int % 100) / 10),
		сотни: Math.floor((int % 1000) / 100),
	};
};

nums.forEach((num) => {
	console.log(`${num}: `, createNumObj(num));
});

//Task 2
const cart = {
	goods: [
		{ type: 'Boots', brand: 'Ricco', price: 3000 },
		{ type: 'Boots', brand: 'Nike', price: 6000 },
		{ type: 'Boots', brand: 'Adidas', price: 5600 },
	],
	totalPrice() {
		return this.goods.reduce((acc, good) => acc + good.price, 0);
	},
};

console.log('Task 2, full price of busket: ', cart.totalPrice());

//Task 3
console.log('Taks 3');
class Good {
	#type;
	#brand;
	#price;
	constructor(type = null, brand = null, price = null) {
		this.#type = type;
		this.#brand = brand;
		this.#price = price;
	}
	get goodInfo() {
		return {
			type: this.#type,
			brand: this.#brand,
			price: this.#price,
		};
	}
}

const standartGood = new Good('Shoes', 'Ricco', 3000);
console.log('Good', standartGood.goodInfo);

class CatalogGood extends Good {
	#discount = null;
	constructor(type, brand, price, discount) {
		super(type, brand, price);
		this.#discount = discount;
	}
	checkDiscount() {
		return this.#discount;
	}
}
const catalogGood = new CatalogGood('Shoes', 'Ricco', 3000, 10);
console.log(
	'Catalog Good',
	standartGood.goodInfo,
	`with ${catalogGood.checkDiscount()}% discount`
); */

/* //HW_3
//Task_1
let i = 2;
const primeNums = [];
while (i <= 100) {
	let sumOfDiv = 0;
	let k = i - 1;
	while (k > 1) {
		if (i % k === 0) sumOfDiv++;
		k--;
	}
	if (sumOfDiv === 0) primeNums.push(i);
	i++;
}
console.log('Task 1', primeNums);

//Task_2-3
const goodsBasket = [
	{ type: 'Boots', brand: 'Ricco', price: 3000 },
	{ type: 'Boots', brand: 'Nike', price: 6000 },
	{ type: 'Boots', brand: 'Adidas', price: 5600 },
];

const countBasketPrice = (goods) => {
	return goods.reduce((acc, good) => acc + good.price, 0);
};

console.log('Task 2-3', countBasketPrice(goodsBasket));

//Task_4
console.log('Task 4');
for (let i = 0; i <= 9; console.log(i), i++) {}

//Task_5
console.log('Task 5');
for (let i = 1; i <= 20; i++) {
	console.log(''.padStart(i, 'x'));
} */

/* //HW_2
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
console.log('3**3 = ' + power(3, 3)); */

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
