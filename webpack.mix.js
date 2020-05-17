let mix = require('laravel-mix');
require('mix-tailwindcss');
require('dotenv').config();

mix.webpackConfig({
  resolve: {
    modules: [
      'node_modules'
    ]
  }
})

mix.autoload({
  jquery: ['$', 'window.$', 'window.jQuery']
});

mix.js('app/scripts/vendor.js', 'assets')
  .setPublicPath('assets')

mix.js('app/scripts/app.js', 'assets')
  .setPublicPath('assets');
   
mix.sass('app/styles/app.scss', 'assets')
  .tailwind()
  .setPublicPath('assets');

mix.browserSync({
  files: ['/var/tmp/theme_ready'],
  watch: true,
  proxy: process.env.STORE,
  port: 8080,
  logPrefix: 'Browsersync'
});