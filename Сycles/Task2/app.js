// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-‘

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ''
for (let i = 0; i < arr.length; i++) {
	if (i == 0) {
		str += `-${arr[i]}-`
	} else {
		str += `${arr[i]}-`
	}
}
console.log(str)
