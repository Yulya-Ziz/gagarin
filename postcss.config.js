// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

// module.exports = {
//   plugins: [
//     autoprefixer,
//     cssnano({ preset: 'default' })
//   ]
// };

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
  ],
};
