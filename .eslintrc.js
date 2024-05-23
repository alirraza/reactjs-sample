module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': [
      'error',
      'never'
    ],
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-param-reassign': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'no-nested-ternary': 0,
    'react/react-in-jsx-scope': 0,
    'no-underscore-dangle': 0,
    'react/no-array-index-key': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
