var counting_numbers = [1, 2, 3, 5, 7, 9, 10];
var missing_numbers = [];
for (var i = 0; i < counting_numbers.length; i++) {
  if (counting_numbers[i + 1] - counting_numbers[i] > 1) {
    missing_numbers.push(counting_numbers[i + 1] - counting_numbers[1]);
  }
}
console.log(missing_numbers);
