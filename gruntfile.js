module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'dist/css/dev/main.css': 'src/css/main.scss'
                }
            },
            dist: {
                options:{
                  outputStyle : "compressed",
                  sourceMap : "false" 
                },
                files: {
                    'dist/css/main.css': 'src/css/main.scss'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/scripts/**/*.js',
                'src/scripts/*.js'
            ]
        },
        browserify: {
          dev: {
            files: {
              'dist/js/bundle_dev.js': ['src/scripts/app.js']
            },
            options: {
              browserifyOptions : {
                debug: true 
              }
            }
          },
          prod: {
            files: {
              'dist/js/bundle_prod.js': ['src/scripts/app.js']
            },
            options: {
              browserifyOptions : {
                debug: false 
              }
            }
          }
        },
        nunjucks: {
          precompile: {
            baseDir: 'src/scripts/views/',
            src: 'src/scripts/views/*/*.html',
            dest: 'dist/js/templates.js'
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          prod: {
            files: {
              'dist/js/bundle_prod.min.js': ['dist/js/bundle_prod.js']
            }
          }
        },
        connect: {
          server: {
            options: {
              port: 8555,
              keepalive : true,
              livereload: true,
              base : "dist",
              hostname: '*'
            }
          }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['src/css/*.scss','src/css/**/*.scss'],
                tasks: ['sass']
            },
            html:{
                files: ['src/views/*.html','src/views/**/*.html'],
                tasks: ['nunjucks']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-nunjucks');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('buildjs',['jshint','browserify', 'uglify']);

};
