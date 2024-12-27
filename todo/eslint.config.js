import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import babelEslintParser from '@babel/eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parser: babelEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
      prettier: eslintPluginPrettier,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',
      'prettier/prettier': 'error',
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
    },
  },
];
