const path = require('path');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    entry: "./src/js/index.js",

    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

    },

    module: {

        rules: [
            
            {

                test: /\.scss$/,

                use: [{

                    loader: "style-loader" // creates style nodes from JS strings
                },

                {
                    loader: "css-loader" // translates CSS into CommonJS
                },

                {
                    loader: "sass-loader" // compiles Sass to CSS
                }]

            },

            {

                test: /\.js$/,

                exclude: /(node_modules)/,

                use: {

                    loader: "babel-loader",

                    options: {

                        presets: ['es2015', 'react']
                        
                    }

                }

            },

            // {

            //     test: /\.(png|jpeg|svg)$/,

            //     use: {

            //         loader: "url-loader",

            //         options: {

            //             name: "./assets/[name].[ext]",
            //             limit: 30000

            //         }

            //     }

            // }

            {
                test: /\.(gif|png|jpe?g)$/i,

                use: {

                    loader: "file-loader",

                    options: {

                        name: "./assets/[name].[ext]"

                    }
                }

            },

            {
                test: /\.svg$/,

                use: {

                    loader: "raw-loader"

                }

            }

        ]
    },

    plugins: [
        // Copy the images folder and optimize all the images
        new CopyWebpackPlugin([{

            from: "./src/assets/", to: "./assets/"
        }]),

        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })

      ]

}