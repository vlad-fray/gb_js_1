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
/* Произойдет преобразование числа к строке,
а затем конкатенация строк */

console.log(1000 + '108');

//Task 4
/* defer - исполнение скрипта после загрузки страницы
async - исполнение скрипта после загрузки скрипта */
