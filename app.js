const generators = require("./project_modules/generators.js");
const generatorEngine = require("./project_modules/engine.js");

generatorEngine(generators.makeGenerator({type: "natural", max: 9}));
generatorEngine(generators.makeGenerator({type: "fibanacchi"}))
generatorEngine(generators.makeGenerator({max: 50}));

