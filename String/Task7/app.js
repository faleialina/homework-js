// 7. На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)
const str = 'dfbbdfs@hb'
let newStr = ''
// console.log(str.replaceAll('@', '!'))

for (let i = 0; i < str.length; i++) {
	str[i] !== '@' ? (newStr += str[i]) : (newStr += '!')
}
console.log(newStr)
