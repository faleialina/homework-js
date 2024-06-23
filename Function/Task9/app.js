// 9. Напишите функцию, которая принимает число и возвращает true, если число является простым, и false в противном случае.
const num = 7
let check = 0

const res = () => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) check++
	}
	return check === 0 ? true : false
}
console.log(res())
