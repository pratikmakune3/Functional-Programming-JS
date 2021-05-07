module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["immutable"],
  rules: {
    "immutable/no-mutation": 2,
  },
};
