module.exports = {
  makeGenerator
}

function makeGenerator({type = "natural", max = 10}) {
  if (type === "natural") {
    return makeNaturalGenerator(max);
  } else
  if (type === "fibanacchi") {
    return makeFibGenerator(max)
  } else {
    return new Error(`type ${type} not found`);
  }
}

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

function makeNaturalGenerator(max) {
  return function *iterateOnNumbers() {
    for(i=1; i<=max; i++) {
      yield i;
    }
  }
}
