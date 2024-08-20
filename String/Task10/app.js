// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const str =/http\:\/\/[a-zA-Z0-9]+\.(com|ru)/gm.test('http://regex101.com')

console.log(str);



