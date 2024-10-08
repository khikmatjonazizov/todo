const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        output: {
            libraryTarget: "system",
        },
        externals: {
            'utils': '@todo/utils',
            'vue': 'vue'
        },
        devServer: {
            hot: false
        }
    },
});