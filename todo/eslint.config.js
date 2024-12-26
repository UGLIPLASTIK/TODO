import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      react: pluginReact,
      prettier: eslintPluginPrettier,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      ...eslintPluginPrettier.rules,
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "on",
      "prettier/prettier": "error",
    },
  },
  {
    extends: [
      "airbnb",
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      eslintPluginPrettier.configs.recommended,
    ],
  },
];