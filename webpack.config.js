const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp?g|svg)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
};
