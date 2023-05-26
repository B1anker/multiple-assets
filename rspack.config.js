/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].12345.js",
    sourceMapFilename: "sourcemap/[name].map"
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
