module.exports = {
  env: { node: true, browser: true, es6: true },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    // Because I prefer .js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Because this is a small project, don't care about proptypes
    'react/prop-types': 0,

    // Because this isn't terribly important, I prefer the defauled exported class at the top of the file  with helpers and styles below
    'no-use-before-define': 0,

    // Because this isn't terribly important either
    'global-require': 0
  }
};
