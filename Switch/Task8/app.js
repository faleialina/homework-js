// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

const a = 'май'
switch (a) {
	case 'апрель':
	case 'май':
	case 'март':
		console.log('весна')
		break
	case 'июнь':
	case 'июль':
	case 'август':
		console.log('лето')
		break
	case 'сентябрь':
	case 'октябрь':
	case 'ноябрь':
		console.log('осень')
		break
	case 'декабрь':
	case 'январь':
	case 'февраль':
		console.log('везимасна')
		break

	default:
		console.log('ошибка ввода')
		break
}
