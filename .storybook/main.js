const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "docs": {
    "docsPage": true
  },
  // webpackFinal: (config, mode) => {
  //   // config.module.rules[2].use[0].options.presets.push([
  //   //   './node_modules/@babel/preset-typescript/lib/index.js',
  //   //   { isTSX: true, allExtensions: true}
  //   // ])
  //   return config
  // }
}