// 4. Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
// Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
// Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
// Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]

class TwoSum {
	constructor(nums, target) {
		this.nums = nums
		this.target = target
	}
	findIndices() {
		let arrIndex = []

		for (let i = 0; i < this.nums.length; i++) {
			let check = this.nums[i]
			for (let j = 1; j < this.nums.length; j++) {
				if (check + this.nums[j] === this.target) {
					arrIndex.push(i)
					arrIndex.push(j)
				}
			}
		}
		return ` Результат: ${arrIndex}`
	}
}
const twoSum = new TwoSum([3, 2, 4], 6)
console.log(twoSum.findIndices())
