module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false, // Отключает требование файла конфигурации Babel
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    rules: {
      // Ваши правила
    },
  };
  