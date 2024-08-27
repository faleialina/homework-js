// 3. Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix {
	constructor(arr) {
		this.arr = arr
	}
	findLongestPrefix() {
		let count = this.arr[0]
		for (let i = 1; i < this.arr.length; i++) {
			for (let j = 0; j < count.length; j++) {
				if (this.arr[i][j] !== count[j]) {
					count = count.slice(0, j)
				}
			}
		}
		return `Результат:${count}`
	}
}
const commonPrefix = new CommonPrefix(['dog', 'racecar', 'car'])
console.log(commonPrefix.findLongestPrefix())

// const arr = ["flower", "flow", "flight"];

// let pref = '';
// let letter = 0;
// let found = true;

// while (found) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (letter >= arr[i].length || letter >= arr[i + 1].length || arr[i][letter] !== arr[i + 1][letter]) {
//             found = false;
//             break;
//         }
//     }

//     if (found) {
//         pref += arr[0][letter];
//         letter++;
//     }
// }

// console.log(pref);

// const array = ["flower", "flow", "flight"];

// const minSize = Math.min(...array.map((item) => item.length));
// let prefix = '';
// for (let i = 0; i < minSize; i++) {
//     const letter = array[0][i];
//     if (!array.every((item) => item[i] === letter)) break;
//     prefix += letter;
// }

// console.log(prefix);
