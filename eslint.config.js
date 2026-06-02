/**
 * This file is used for the purposes of linting the package codebase during development.
 */
import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default [
  // Base recommended config
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Custom configuration for your files
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-undef': 'warn',
      'no-unused-vars': 'off',
      'no-shadow': 'warn',
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/keyword-spacing': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    }
  },
  // TypeScript handles undefined variables natively - TypeScript's compiler already
  // checks for undefined variables and does this more accurately than ESLint
  // can for TypeScript code.
  {
    files: ['**/*.ts'],
    rules: {
      'no-undef': 'off',
    }
  }
];
