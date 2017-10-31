// zadanie Kodilla 8.5

var a = prompt('podaj wartość zmiennej "a"');
var b = prompt('podaj wartość zmiennej "b"');

value = ((a * a) - (2 * a * b) + (b * b));

//okno dialogowe z podanym wynikiem
alert('Wynik: ' + value);

console.log('Wynik wynosi: ' + value);

if (value > 0) {
  console.log('Wynik dodatani');
}

if (value < 0) {
  console.log('Wynik ujemny');
}

if (value == 0) {
  console.log('Wynik równy ZERO');
}
