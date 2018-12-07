function *myGen() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

const it = myGen();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);