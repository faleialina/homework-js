// 21. Напишите функцию, которая принимает два числа и возвращает наибольшее общее делимое этих чисел.

// const num_1 = 2
// const num_2 = 8

// const result = () => {
// 	const maxDiv = Math.min(num_1, num_2)
// 	let arrDivisor = []
// 	for (let i = 1; i <= maxDiv; i++) {
// 		if (num_1 % i === 0 && num_2 % i === 0) arrDivisor.push(i)
// 	}
// 	return Math.max(...arrDivisor)
// }
// console.log(result())

const res = (a, b) => {
	let res = 0
	for (let i = 2; i <= a; i++) {
			if (a % i == 0 && b % i == 0) {
					if (i > res) {
							res = i
					}
			}
	}

	return res
}

console.log(res(5, 15));