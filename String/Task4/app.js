// 4. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы
const str = 'nnnn'

console.log(!isNaN(str)?'err':`length ${str.length}`);