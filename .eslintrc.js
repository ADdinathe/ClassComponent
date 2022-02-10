const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['*.config.js'],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  rules: {
    curly: ['error', 'all'],
    quotes: ['error', 'single'],
    'no-alert': 'error',
    'no-console': 'warn',
    'no-redeclare': 'error',
    'no-var': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'max-len': ['error', { code: 101 }],
    'import/default': 'warn',
    'import/no-named-as-default': 'warn',
    'no-template-curly-in-string': 'error',
    'prefer-destructuring': 'warn',
    'prefer-const': 'error',
    'array-callback-return': 'warn',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/prefer-stateless-function': 'error',
    'react/display-name': 'off',
    'prefer-template': 'error',
    'function-paren-newline': 'error',
    'default-param-last': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['off', 'never'],
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'no-multi-assign': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'id-length': ['error', { min: 2 }],
    'comma-style': ['error', 'last'],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    semi: 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.scss', '.svg'],
    },
    'import/resolver': {
      typescript: {
        project: path.resolve('./tsconfig.json'),
      },
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    react: {
      version: 'detected',
    },
  },
};
