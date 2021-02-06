const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV=== 'production' ? 'production' : 'development',
  entry: './src/handler.ts',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { compilerOptions: { declaration: false } }
      }
    ]
  }
};
