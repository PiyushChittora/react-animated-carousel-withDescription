var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: "react"
    }
};