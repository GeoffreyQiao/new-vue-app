// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['vue'],
  // required to lint *.vue files
  plugins: ['html','vue'],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'no-multi-spaces': 0,
    'no-extend-native': 1
  }
}
