// 6. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы
const str = 'nnnmn mjjjk'
console.log(
	!isNaN(str)
		? 'err'
		: str[0].toUpperCase() + str.slice(1).toLowerCase().replaceAll(' ', '')
)
