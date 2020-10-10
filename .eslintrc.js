module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': ['error', {'startTag': 'never', 'endTag': 'never', 'selfClosingTag': 'never'}],
    'vue/object-curly-spacing': [ 'error', 'always' ],
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'vue/keyword-spacing': ['error', { 'before': true, 'after': true }],
    'vue/arrow-spacing': ['error', { 'before': true, 'after': true }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { 'registeredComponentsOnly': false }],
    'no-unused-vars': 0,
    'no-trailing-spaces': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-in-parens': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'yoda': [2, 'never'],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'no-console': 'error',
  },
  globals: {
    createLocalVue: 'readonly',
    getStore: 'readonly',
    mockLocation: 'readonly',
    mockCar: 'readonly',
    mockSpecs: 'readonly',
    mockDealer: 'readonly',
    mockOpeningHours: 'readonly',
    mockDataLayerStore: 'readonly',
    mockCpoMisc: 'readonly',
    mockCpoMakes: 'readonly',
    mockCpoDescriptions: 'readonly',
    mockCpoCertifications: 'readonly',
    mockCpoBadges: 'readonly',
    mockSearchResults: 'readonly',
    mockSearchCar: 'readonly',
    mockLogs: 'readonly',
    googletag: 'readonly',
  },
}
