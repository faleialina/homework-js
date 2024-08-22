// 	6. Реализуйте класс, который находит полное число метров по заданному числу сантиметров.
// 	Добавьтепроверкуна вводтолькочисел.
// 	Входные: 345 →Результат: 3 метров
// 	Входные: 100 → Результат: 1 метр
// 	Входные: 99 →Результат: 0 метров
// 	Входные: 750 →Результат: 7 метров
// 	Входные: 10 →Результат: 0 метров
// 	Входные: hi → Результат: Вы ввелине число!

class TranslationIsLong {
	constructor(num) {
		this.num = num
	}
	translation() {
		return `${Math.floor(this.num/100)} метров`
	}
}
const translationIsLong = new TranslationIsLong(99)
console.log(translationIsLong.translation())
