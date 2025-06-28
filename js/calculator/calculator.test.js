const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 3 / 3 to equal 1', () =>{
  expect(calculator.divide(3,3)).toBe(1);
});

test('divide 6 / 3 to equal 2', () =>{
  expect(calculator.divide(6,3)).toBe(2);
});

test('multiply 6 * 3 to equal 2', () =>{
  expect(calculator.multiply(6,3)).toBe(18);
});

test('multiply 3 * 3 to equal 2', () =>{
  expect(calculator.multiply(3,3)).toBe(9);
});

test('divide 1 / 0 to equal no se puede dividir entre 0', () =>{
  expect(calculator.divide(1,0)).toBe('no se puede dividir entre 0');
});