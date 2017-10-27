module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: ['js/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'css/input.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
          }
      }
    },

    browserSync: {
        bsFiles: {
            src : 'assets/css/*.css'
        },
        options: {
            server: {
                baseDir: "./"
            }
        }
    }


  });



  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');


  // Default task(s).
  grunt.registerTask('default', ["jshint", "sass", "watch", "browserSync"]);
};
