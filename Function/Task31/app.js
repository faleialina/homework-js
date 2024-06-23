// 31. Напишите функцию, которая принимает массив строк и возвращает строку, которая встречается чаще всего.

// const arr = ['aaa', 'sss', 'fff', 'sss']
// let obj = {}
// const result = () => {
// 	arr.forEach(el => {
// 		obj[el] = (obj[el] || 0) + 1
// 	})
// 	return obj
// }
// result()
// console.log(obj)

const checkLength = (arr) => {
	let result = {
			title: '',
			count: 0
	}

	for (let i = 0; i < arr.length; i++) {
			let tampalaruObj = {
					title: arr[i],
					count: 0
			}

			for (let a = 0; a < arr.length; a++) {
					if (arr[a] === tampalaruObj.title) {
							tampalaruObj.count +=1
					}
			}

			if (tampalaruObj.count > result.count) {
					result = tampalaruObj
			}
	}

	return result.title
}

console.log(checkLength(['dfs', 'an', 'dsdfs', 'an', 'an']));
