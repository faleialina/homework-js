// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString, переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString {
	
	reverseString(str) {
		return str.split('').reverse().join('')
	}
	upperFirst(str) {
		return str[0].toUpperCase() + str.slice(1)
	}
	upperEvery(str) {
		return str
			.split(' ')
			.map(elem => elem[0].toUpperCase() + elem.slice(1))
			.join(' ')
	}
}
const wordString = new WordString()
console.log(wordString.reverseString('Alina Falei'));
console.log(wordString.upperFirst('Alina Falei'));
console.log(wordString.upperEvery('Alina falei'));
// class WordString {
// 	constructor(str) {
// 		this.str = str
// 	}
// 	reverseString() {
// 		return this.str.split('').reverse().join('')
// 	}
// 	upperFirst() {
// 		return this.str[0].toUpperCase() + this.str.slice(1)
// 	}
// 	upperEvery() {
// 		return this.str
// 			.split(' ')
// 			.map(elem => elem[0].toUpperCase() + elem.slice(1))
// 			.join(' ')
// 	}
// }
// const wordString = new WordString('Alina Falei')
// console.log(wordString.reverseString());
// console.log(wordString.upperFirst());
// console.log(wordString.upperEvery());
