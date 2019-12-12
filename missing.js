// var counting_numbers = [1, 3];
// var missing_numbers = [];
// for (var i = 0; i < counting_numbers.length; i++) {
//   if (counting_numbers[i + 1] - counting_numbers[i] !== 1) {
//     missing_numbers.push(counting_numbers[i] + 1);
//   }
// }
// console.log(missing_numbers);
// module.exports = counting_numbers;
// var counting_numbers = [1, 2, 3, 5, 6, 8, 10];
function missing(list) {
  var missing_numbers = [];
  var max = Math.max(...list);
  var min = Math.min(...list);
  for (var n = min; n <= max; n++) {
    if (list.includes(n)) {
    } else {
      missing_numbers.push(n);
    }
  }
  return missing_numbers;
}

module.exports = missing;
