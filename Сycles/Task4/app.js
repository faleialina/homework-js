// Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли введенные значения анаграммами

const str1 = 'ctop'
const str2 = 'pcto'

if (str1.split('').sort().join() == str2.split('').sort().join()) {
	console.log('анаграммамы')
}else{
	console.log('не анаграммамы')
}
