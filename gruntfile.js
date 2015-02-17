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
        copy: {
          fonts: {
            expand : true,
            cwd   :'src/',
            src: ['fonts/*', 'fonts/**/*'], 
            dest: 'dist/'
          }

        },
        browserify: {
          dev: {
            files: {
              'dist/js/bundle_dev.js': ['src/scripts/app.js']
            },
            options: {
              browserifyOptions : {
                debug: true
             //   basedir : ""
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
            src: ['src/scripts/views/**/*.html','src/scripts/components/**/*.html','src/scripts/layouts/**/*.html'],
            dest: 'src/templates.js'
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          dependencies:{
            files: {
              'dist/js/dependencies.js': [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/nunjucks/browser/nunjucks-slim.js', 
                'src/templates.js',
                'node_modules/gsap/src/minified/TweenLite.min.js',
                'node_modules/gsap/src/minified/plugins/CSSPlugin.min.js',
                'node_modules/gsap/src/minified/jquery.gasp.js',
                "src/vendors/materialize/animation.js",
                "src/vendors/materialize/velocity.min.js",
                "src/vendors/materialize/hammer.min.js",
                "src/vendors/materialize/jquery.hammer.js",
                "src/vendors/materialize/collapsible.js",
                "src/vendors/materialize/dropdown.js",
                "src/vendors/materialize/leanModal.js",
                "src/vendors/materialize/materialbox.js",
                //src/vendors/materialize/s/parallax.js",
                "src/vendors/materialize/tabs.js",
                "src/vendors/materialize/tooltip.js",
                "src/vendors/materialize/waves.js",
                "src/vendors/materialize/toasts.js",
                "src/vendors/materialize/sideNav.js",
                //src/vendors/materialize/s/scrollspy.js",
                "src/vendors/materialize/forms.js",
                //src/vendors/materialize/s/slider.js",
                //src/vendors/materialize/s/cards.js",
                //src/vendors/materialize/s/pushpin.js",
                "src/vendors/materialize/buttons.js",
                //"src/vendors/materialize/transitions.js"
              ]
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
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('templates',['nunjucks', 'uglify:dependencies']);
    grunt.registerTask('js',['jshint','browserify:dev']);
    grunt.registerTask('build',['jshint','browserify', 'uglify']);
    grunt.registerTask('dep',['uglify:dependencies']);

    grunt.registerTask('test-selenium',['webdriver']);


};
