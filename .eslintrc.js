const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-var': 2,
    'no-alert': 2,
    'no-debugger': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'spaced-comment': 0,
    'computed-property-spacing': [2, 'never'],
    'max-len': [2, 100, 4, { ignoreUrls: true }],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': 2,
    'newline-after-var': 0,
    'generator-star-spacing': 0,

    // Import:
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/imports-first': 2,
    'import/no-duplicates': 2,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
