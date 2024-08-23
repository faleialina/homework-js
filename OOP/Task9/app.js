// 	9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину, выраженнуювчасахиминутах.
// 	Входные: 150 минут →Результат: 2 часа 30 минут
// 	Входные: 240 минут→Результат:4 часа 0минут
class Time {
	constructor(minutes) {
		this.minutes = minutes
	}
	conversion = () => {
		const hours = Math.floor(this.minutes / 60);
    const remainingMinutes = this.minutes % 60;
		return `${hours} часа ${remainingMinutes} минут`;
	}
}
const time = new Time(240)
console.log(time.conversion())
