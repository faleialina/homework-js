// 8. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'
const str = 'aaa bbb ccc'.replaceAll(/[b ]+/gm, '').trim()

console.log(str);