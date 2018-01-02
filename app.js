
function makeGenerator(max) {
  return function *iterateOnNumbers() {
    for(i=1; i<=max; i++) {
      yield i;
    }
  }
}

var genToThree = makeGenerator(3);
var genToFive = makeGenerator(5);

generatorEngine(genToThree);
generatorEngine(genToFive);

function generatorEngine(generator) {
  var iterator = generator();
  var keepGoing = true;
  do {
    var iteration = iterator.next();
    keepGoing = !iteration.done;
    console.log((keepGoing ? iteration.value : "bye!"));
  } while(keepGoing)
}

