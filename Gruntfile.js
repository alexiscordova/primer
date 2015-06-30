module.exports = function(grunt) {
  // Load all Grunt plugins tasks
  require('load-grunt-tasks')(grunt);

  // Grunt Configuration
  grunt.initConfig({

    // grunt-contrib-clean
    clean: {
      build: ['build'],
      dist: ['dist']
    },

    copy: {
      build: {
        expand: true,
        src: ['src/fonts'],
        dest: 'build/'
      },

      dist: {
        expand: true,
        src: ['src/fonts'],
        dest: 'dist/'
      }
    },

    // grunt-contrib-sass
    sass: {
      options: {
        style: 'expanded',
        precision: 10
      },

      build: {
        files: [
          { 'build/assets/css/primer.css': 'src/primer.scss' }
        ]
      },

      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [
          { 'dist/assets/css/primer.css': 'src/primer.scss' }
        ]
      }
    },

    // grunt-autoprefixer
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'last 3 iOS versions', 'Explorer >= 9'],
        cascade: false
      },

      build: { src: 'build/assets/css/primer.css' },
      dist: { src: 'dist/assets/css/primer.css' }
    },

    // grunt-contrib-cssmin
    cssmin: {
      options: {
        report: 'gzip'
      },
      dist: {
        files: [
          { 'dist/assets/css/primer.min.css': 'dist/assets/css/primer.css' }
        ]
      }
    },

    // grunt-contrib-watch
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: ['clean:build', 'sass:build', 'autoprefixer:build']
      }
    }
  });

  // Registered Grunt tasks
  grunt.registerTask('default', ['clean:build', 'sass:build', 'autoprefixer:build']);
  grunt.registerTask('deploy', ['clean', 'sass:dist', 'autoprefixer:dist', 'cssmin:dist']);
};