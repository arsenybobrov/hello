module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "arrow-parens": [1, "always"],
    "camelcase": "off",
    "no-console": "off",
    "global-require": "off",
    "no-unused-vars": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "function-paren-newline": ["error", "consistent"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "operator-linebreak": "off",
    "no-unused-expressions": ["error", {"allowTaggedTemplates": true}]
  },
};
