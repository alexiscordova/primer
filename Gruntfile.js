module.exports = function(grunt) {
  // Load all Grunt plugins tasks
  require('load-grunt-tasks')(grunt);

  // Grunt Configuration
  grunt.initConfig({

    // grunt-contrib-clean
    clean: {
      dist: ['dist'],
      icons: ['dist/assets/svg']
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'src',
        src: ['fonts/**/*', 'svg/image-*.svg'],
        dest: 'dist/assets/'
      }
    },

    // grunt-contrib-sass
    sass: {
      options: {
        style: 'expanded',
        precision: 10
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
        tasks: ['clean', 'sass:dist', 'autoprefixer:dist']
      }
    },

    // grunt-svgstore
    svgstore: {
      options: {
        cleanup: ['fill', 'fill-rule'],
        svg: {
          style: 'display: none;',
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:sketch': 'http://www.bohemiancoding.com/sketch/ns',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        }
      },
      default: {
        files: {
          'dist/assets/svg/primer-iconset.svg': ['src/svg/icon-*.svg']
        }
      }
    },

    // grunt-contrib-imagemin
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            cwd: '',
            src: ['src/svg/*.svg'],
            dest: ''
          }
        ]
      }
    }
  });

  // Registered Grunt tasks
  grunt.registerTask('default', ['clean', 'sass:dist', 'autoprefixer:dist', 'cssmin:dist', 'icons']);
  grunt.registerTask('icons', ['clean:icons', 'imagemin', 'copy', 'svgstore']);
};