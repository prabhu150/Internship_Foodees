module.exports = function(grunt) {
  //Project confguration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['server/src/*.scss'],
        tasks: 'sass'
      },
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',//nested, compact (converts eaach into a line), compressed(converts all into a singleline), expanded
          sourcemap: 'auto',
        },
        files: {
          'public/css/main.css': 'server/src/main.scss', //converts main.scss to main.css
          'public/css/_footer.css': 'server/src/_footer.scss', //converts footer.scss to footer.css
          'public/css/_header.css': 'server/src/_header.scss', //converts _header.scss to _header.css
         'public/css/_icon_image.css': 'server/src/_icon.scss', //converts _icon.scss to _icon.css
          'public/css/_image.css': 'server/src/_image.scss', //converts _image.scss to _image.css
          'public/css/_index.css': 'server/src/_index.scss', //converts _index.scss to _index.css
         'public/css/_index.css': 'server/src/_index.scss', //converts _index.scss to _index.css
          'public/css/_logo.css': 'server/src/_logo.scss', //converts _logo.scss to _logo.css
          'public/css/_signup.css': 'server/src/_signup.scss', //converts _signup.scss to _signup.css
          'public/css/_tabdata.css': 'server/src/_tabdata.scss', //converts _tabdata.scss to _tabdata.css
        


        }
      }
    },
  });

  //Load NPM tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Default task(s)
  grunt.registerTask('default', ['sass','watch']); //whenever grunt, sass is called

};