module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true,
        "jasmine": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "no-undef":["off"],
      "no-unused-vars":["off"]
    }
};
