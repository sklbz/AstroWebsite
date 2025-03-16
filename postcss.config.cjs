module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-preset-env'),
    require('postcss-nested-vars'),
  ],
};