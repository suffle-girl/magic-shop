import { defineConfig } from "eslint-define-config";

export default defineConfig({
  // Specify the environment
  env: {
    browser: true,
    es2021: true,
  },
  // Extend recommended configurations
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // if you're using TypeScript
  ],
  // Specify the parser options
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  // Specify the rules
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule requiring React in scope
    // Add any other custom rules here
  },
  // Configure settings for React
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
});
