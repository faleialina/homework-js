// 11. *Создайте класс PascalsTriangle, который будет принимать количество строк
// numRows и содержать метод generateTriangle(), возвращающий первые
// numRows строк треугольника Паскаля.
// Входные: new PascalsTriangle(5).generateTriangle() → Результат: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1],
// [1, 4, 6, 4, 1]]
// Входные: new PascalsTriangle(1).generateTriangle() → Результат: [[1]]

class PascalsTriangle {
	constructor(numRows) {
		this.numRows = numRows
	}

	generateTriangle() {
		return
	}
}

const pascalsTriangle = new PascalsTriangle(5)
console.log(pascalsTriangle.generateTriangle())
