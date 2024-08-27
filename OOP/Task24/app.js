// 6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
// вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16) → Результат: 4
// Входные: new SquareRootCalculator(25) → Результат: 5
// Входные: new SquareRootCalculator(1) → Результат: 1

class Number {
	constructor(num) {
		this.num = num
	}
}
class SquareRootCalculator extends Number {
	calculateSquareRoot() {
		let res = 0
		for (let i = 0; i < this.num; i++) {
			if (i ** 2 == this.num) res += i
		}
		return `Результат:${res}`
	}
}
const squareRootCalculator = new SquareRootCalculator(16)
console.log(squareRootCalculator.calculateSquareRoot())
