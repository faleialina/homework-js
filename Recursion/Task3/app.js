// 3. На входе число n. Вычислите сумму натуральных чисел от 1 до n используя рекурсию
// Входные: 5 → Результат: 15
// Входные: 3 → Результат: 6
// Входные: 10 → Результат: 55

function test3(n) {
	if (n === 1) return 1

	return n + test3(n - 1)
}
console.log(test3(5))