// 7. Вычислить факториал числа используя рекурсию
// Входные: 4 → Результат: 24
// Входные: 5 → Результат: 120
// Входные: 3 → Результат: 6

const test = n => {
	if (n === 1) return n

	return n * test(n - 1)
}
console.log(test(4))
