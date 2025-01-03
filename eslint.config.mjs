import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
      files: ['**/*.js'], // Apply this config to all JavaScript files
      languageOptions: {
          ecmaVersion: 2021, // Use ECMAScript 2021 syntax
          sourceType: 'module',
          globals: {
              require: 'readonly', // Allow `require` as a global
              process: 'readonly', // Allow `process` as a global
              module: 'readonly', // Allow `module` as a global
              __dirname: 'readonly', // Allow `__dirname` as a global
              __filename: 'readonly', // Allow `__filename` as a global
          },
      },
      rules: {
          'no-undef': 'off', // Disable `no-undef` for Node.js globals
      },
  },
];
