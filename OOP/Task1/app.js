// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.
class Singer {
	static getAutograph(name, surname) {
		return `"${name} ${surname}, с наилучшими пожеланиями"`
	}
}

console.log(Singer.getAutograph('Alina', 'Falei'))

// class Singer {
// 	getAutograph(name, surname) {
// 		return `"${name} ${surname}, с наилучшими пожеланиями"`
// 	}
// }
// const singer = new Singer()
// console.log(singer.getAutograph('Alina', 'Falei'))

// class Singer {
// 	constructor(name, surname) {
// 		this.name = name
// 		this.surname = surname
// 	}
// 	getAutograph() {
// 		return `"${this.name} ${this.surname}, с наилучшими пожеланиями"`
// 	}
// }
// const singer = new Singer('Alina', 'Falei')
// console.log(singer.getAutograph())
