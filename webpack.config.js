const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const PurgecssPlugin = require('purgecss-webpack-plugin')
const webpack = require('webpack')
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const options = {
    filepath: '/robots.txt'
}; 


const PATHS = {
    src: path.join(__dirname, 'src')
  }



module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    'targets': { 'chrome': '64', 'ie': '11', 'firefox': '68' }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: true }
                }]
            },


            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    }
                ],
            },

            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
              },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100'
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon: "./src/favicons/favicon-16x16.png",
            inject: true,
            chunks: ['index'],
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new RobotstxtPlugin(options),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
          }),
        require('autoprefixer'),
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jquery'
        })

    ]
}