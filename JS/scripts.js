// skrypt oblicz pole trójkąta

// pobieranie od użytkowanika wartości boku i wysokości trójkąta
var a = prompt('podaj długość podstawy trójkąta \"a"');
var h = prompt('podaj wysokość trójkąta \"h"');

// wzór na pole trójkąta
triangleArea = ((a * h) / 2);

//okno dialogowe z podanym wynikiem
alert('Pole trójkata wynosi: ' + (a * h) / 2);

console.log('Pole trójkąta o długości podstawy a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
