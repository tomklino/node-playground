
function makeGenerator(max) {
  return function *iterateOnNumbers() {
    for(i=1; i<=max; i++) {
      yield i;
    }
  }
}

var generator = makeGenerator(3);
var iterator = generator();

var keepGoing = true;
do {
  var iteration = iterator.next();
  keepGoing = !iteration.done;
  console.log((keepGoing ? iteration.value : "bye!"));
} while(keepGoing)

