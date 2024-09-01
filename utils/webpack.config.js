const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const Dotenv = require('dotenv-webpack')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "todo",
    projectName: "utils",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new Dotenv(),
    ],
    resolve: {
      fallback: {
        "process": require.resolve("process/browser.js")
      }
    },
    externals: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  });
};
