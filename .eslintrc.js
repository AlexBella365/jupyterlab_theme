module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    es6: true,
    browser: true
  },
  rules: {
    curly: ['error', 'all'],
    eqeqeq: 'error',
    'prefer-arrow-callback': 'error'
  }
};
