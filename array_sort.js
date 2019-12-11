var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "diana"];
function sort(array1) {
  var even_numbers = [];
  var charaz = [];
  var odd_numbers = [];
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
      even_numbers.push(array1[i]);
    } else if (array1[i] % 2 !== 0) {
      odd_numbers(array1[i]);
    } else {
      charaz.push(array1[i]);
    }
  }
}
console.log(even_numbers);
