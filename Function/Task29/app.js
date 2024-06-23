// 29. Напишите функцию, которая принимает массив чисел и возвращает максимальное значение.

// const arr = [1, 2, 3, 4, 5]

// let maxNum = 0
// const result = () =>
// 	arr.forEach((el, index) => (el > maxNum ? (maxNum = el) : maxNum))

// result()
// console.log(maxNum)

const arr = [1, 2, 3, 4, 5]
const result =()=>Math.max(...arr)
console.log(result())


