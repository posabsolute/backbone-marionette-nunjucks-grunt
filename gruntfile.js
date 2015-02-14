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
            baseDir: 'src/scripts',
            src: ['src/scripts/views/**/*.html','src/scripts/components/**/*.html'],
            dest: 'src/templates.js'
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          dependencies:{
            files: {
              'dist/js/dependencies.js': ['node_modules/jquery/dist/jquery.min.js','node_modules/nunjucks/browser/nunjucks-slim.js', 'src/templates.js']
            }
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
              base : "",
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
            js: {
                files: ['src/scritepts/*.js','src/scripts/**/*.js'],
                tasks: ['js']
            },
            html:{
                files: ['src/scripts/views/*.html','src/scripts/views/**/*.html', 'src/scripts/components/**/*.html'],
                tasks: ['templates']
            }
        },
        webdriver: {
          githubTest: {
            tests: 'tests/selenium/sidebar.test.js'
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
    grunt.loadNpmTasks('grunt-webdriver');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('templates',['nunjucks', 'uglify:dependencies']);
    grunt.registerTask('js',['jshint','browserify']);
    grunt.registerTask('build',['jshint','browserify', 'uglify']);

    grunt.registerTask('test-selenium',['webdriver']);


};
