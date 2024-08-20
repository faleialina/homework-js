// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие функции. Добавить проверки на ввод

class Calculator {
	constructor(firstNumber, secondNumber) {
		if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
			throw new Error('Оба аргумента должны быть числами')
		}
		this.firstNumber = firstNumber
		this.secondNumber = secondNumber
	}
	sum() {
		return this.firstNumber + this.secondNumber
	}
	difference() {
		return this.firstNumber - this.secondNumber
	}
	multiply() {
		return this.firstNumber * this.secondNumber
	}
	division() {
		return this.firstNumber / this.secondNumber
	}
}

try {
	const calculator = new Calculator(20, 10)

	console.log(`Сумма: ${calculator.sum()}`)
	console.log(`Разность: ${calculator.difference()}`)
	console.log(`Произведение: ${calculator.multiply()}`)
	console.log(`Частное: ${calculator.division()}`)
} catch (error) {
	console.error(error.message)
}
