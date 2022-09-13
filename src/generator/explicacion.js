// Generadores - si se acaban los yield retorna undefined
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);

function* iterable(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterable([1, 2, 3, 4, 5]);
console.log(it.next().value);
console.log(it.next().value);