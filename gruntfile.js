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