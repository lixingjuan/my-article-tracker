module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "spaced-comment": 1,
    "no-prototype-builtins": 0,
    "no-unused-vars": 1,
  },
  eslintIgnore: [
    "React/debug-react/react.development.js",
    "React/debug-react/react-dom.development.js",
  ],
    "no-irregular-whitespace": 0
  }
};
