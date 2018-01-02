const generators = require("./project_modules/generators.js");
const generatorEngine = require("./project_modules/engine.js");

generatorEngine(generators.makeFibGenerator(9));

