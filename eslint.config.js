import js from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
  pluginCypress.configs.recommended,
  {
    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "off",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-async-before": "error",
      "cypress/no-pause": "error",
      "cypress/no-debug": "error"
    }
  }
];