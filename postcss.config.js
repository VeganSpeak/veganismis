module.exports = {
  plugins: [
    // First we need to import everything including custom css
    require('postcss-import'),
    // Nest stuff like Sass
    require('postcss-nested'),
    // Future stuff now
    require('postcss-preset-env')({
      stage: 0
    }),
    // Now run Tailwind
    require('tailwindcss'),
    // require('cssnano')({
    //   discardDuplicates: true
    // }),
  ]
}