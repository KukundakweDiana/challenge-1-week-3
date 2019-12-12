var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "d", "i", "a", "n", "a"];
function sort(array) {
  var object = {
    even_numbers: [],
    charaz: [],
    odd_numbers: []
  };
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      object.even_numbers.push(array[i]);
    } else if (array[i] % 2 === 1) {
      object.odd_numbers.push(array[i]);
    } else {
      object.charaz.push(array[i]);
    }
  }
  console.log(object);
}

sort(array1);
