/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].[chunkhash][ext]"
  },
  builtins: {
    html: [
      {
        template: "./public/index.html",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.webp$/i,
        type: "asset/resource",
      },
    ],
  },
};
