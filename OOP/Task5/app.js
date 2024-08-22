// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются

class Anagram {
	constructor(firstStr, secondStr) {
		this.firstStr = firstStr
		this.secondStr = secondStr
	}
	checkingForTheAnagram() {
		return this.firstStr.split('').sort().join('') ===
			this.secondStr.split('').sort().join('')
			? true
			: false
	}
}
const anagram = new Anagram('slime', 'smile')
console.log(anagram.checkingForTheAnagram())
