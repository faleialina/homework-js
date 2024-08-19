// 12. Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
const num = String(1234)
let sum = 0
// for (let i = 0; i < num.length; i++) {
// 	sum += +num[i]
// }
// console.log(sum)

let arr = Array.from(num)
const res = arr.reduce((sum, el) => (sum += +el), 0)
const res2 = arr.reduce((sum, el) => (sum *= +el), 1)
console.log(res, res2)
