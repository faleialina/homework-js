// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
// стороны), используя рекурсию.
// Входные: "madam" → Результат: True
// Входные: "hello" → Результат: False
// Входные: "racecar" → Результат: True

const test = s => {
	if(s.length<=1)return true

	if (s[0]!==s[s.length-1]) return false
	
	return test(s.slice(1,-1))
}
console.log(test('madam'))