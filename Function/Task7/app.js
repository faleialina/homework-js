// 7. Напишите функцию, которая принимает массив строк и возвращает массив только тех строк, которые содержат больше пяти символов.
const arrFilter = arr => {
	return arr.filter(el => el.length > 5)
}
console.log(arrFilter(['dsdfsd', 'dd', 'dfsdsdvsd']))
