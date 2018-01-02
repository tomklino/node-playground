function *iterateOnNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

var iterator = iterateOnNumbers();

var keepGoing = true;
do {
  var iteration = iterator.next();
  keepGoing = !iteration.done;
  console.log((keepGoing ? iteration.value : "bye!"));
} while(keepGoing)

