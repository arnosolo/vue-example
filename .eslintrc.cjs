module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '@antfu',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/no-deprecated-slot-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'curly': ['error', 'all'],
    'quotes': ['error', 'single'],
    'no-console': 'off',
  },
}
