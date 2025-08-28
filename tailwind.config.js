module.exports = {
  darkMode: 'class', // critical: use 'class' not 'media'
  content: [
    './src/main/resources/templates/**/*.html',
    './src/main/resources/static/js/**/*.js',
    // add other paths for tailwind to scan for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
