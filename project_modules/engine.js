module.exports = generatorEngine

function generatorEngine(generator) {
  var iterator = generator();
  var keepGoing = true;
  do {
    var iteration = iterator.next();
    keepGoing = !iteration.done;
    console.log((keepGoing ? iteration.value : "bye!"));
  } while(keepGoing)
}

