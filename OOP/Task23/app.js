// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

class Number {
	constructor(num) {
		this.num = num
	}
}
class PalindromeChecker extends Number {
	checkingThePalindrome() {
		const res = this.num.toString().split('').reverse().join('')

		return `Результат:${this.num.toString() === res ? true : false}`
	}
}
const palindromeChecker = new PalindromeChecker(12321)
console.log(palindromeChecker.checkingThePalindrome())
