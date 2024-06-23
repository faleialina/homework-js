// 53. Реализуйте функцию, которая принимает строку в формате JSON и возвращает объект, соответствующий этой строке. Не используйте встроенные методы JSON.parse.

function customJSONParse(jsonString) {
	// Удалим пробелы и переведем строку в массив символов
	const charArray = jsonString.replace(/\s/g, '').split('')
	console.log(charArray)
	// Проверка на пустую строку
	if (charArray.length === 0) {
		throw new Error('Empty input string.')
	}

	// Рекурсивная функция для разбора JSON
	function parseValue() {
		const char = charArray.shift()
		console.log(char)
		if (char === '{') {
			const obj = {}
			while (charArray[0] !== '}') {
				const key = parseValue()
				const value = parseValue()
				obj[key] = value
			}
			charArray.shift() // Удаляем закрывающую фигурную скобку
			return obj
		} else if (char === '[') {
			const arr = []
			while (charArray[0] !== ']') {
				const value = parseValue()
				arr.push(value)
			}
			charArray.shift() // Удаляем закрывающую квадратную скобку
			return arr
		} else if (char === '"') {
			let str = ''
			while (charArray[0] !== '"') {
				str += charArray.shift()
			}
			charArray.shift() // Удаляем закрывающую кавычку
			return str
		} else {
			let numStr = ''
			while (/[0-9.-]/.test(charArray[0])) {
				numStr += charArray.shift()
			}
			return parseFloat(numStr)
		}
	}

	return parseValue()
}

// Пример использования:
const jsonString = '{"age": 30, "city": "New York"}'
try {
	const parsedObject = customJSONParse(jsonString)
	console.log(parsedObject)
} catch (error) {
	console.error('Error parsing JSON:', error.message)
}
