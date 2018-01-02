const generators = require("./project_modules/generators.js");

generatorEngine(generators.makeFibGenerator(9));

function generatorEngine(generator) {
  var iterator = generator();
  var keepGoing = true;
  do {
    var iteration = iterator.next();
    keepGoing = !iteration.done;
    console.log((keepGoing ? iteration.value : "bye!"));
  } while(keepGoing)
}

