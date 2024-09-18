// 2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
// Входные: 5 → Результат: 4 2 0

function test2(n) {
	if (n === 0) return 0
	if (n % 2 === 0) {
		return n + ' ' + test2(n - 2)
	} else {
		return test2(n - 1)
	}
}
console.log(test2(5))