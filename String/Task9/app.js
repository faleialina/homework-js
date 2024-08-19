// 9. На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)
const str = 'xxxx-xx-xx'.replaceAll('-', '/').split('/').reverse().join('/')
console.log(str);