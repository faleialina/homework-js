// 	8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является то false.

class Validator {
	isEmail = str => {
		return /^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(str) ? true : false
	}
}

const validator = new Validator()
console.log(validator.isEmail('august3@mail.ru'))
