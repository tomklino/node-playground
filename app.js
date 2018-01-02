
function makeFibGenerator(max) {
  return function *() {
    var m1 = 1, m2 = 1, next;
    for(i=1; i<=max; i++) {
      yield m1;
      next = m1 + m2;
      m1 = m2;
      m2 = next;
    }
  }
}

function makeGenerator(max) {
  return function *iterateOnNumbers() {
    for(i=1; i<=max; i++) {
      yield i;
    }
  }
}

generatorEngine(makeFibGenerator(9));

function generatorEngine(generator) {
  var iterator = generator();
  var keepGoing = true;
  do {
    var iteration = iterator.next();
    keepGoing = !iteration.done;
    console.log((keepGoing ? iteration.value : "bye!"));
  } while(keepGoing)
}

