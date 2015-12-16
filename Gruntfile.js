'use strict';
module.exports = function (grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			build: {
				options: {
					debug: true,
					transform: ['reactify']
				},
				files: {
					'public/js/main.js': 'app/assets/js/main.js'
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'public/js/main-min.js': ['app/assets/js/main.js']
				}
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'public/css/main.css': 'app/assets/css/main.scss'
				}
			}
		},
		cssmin: {
			options: {
				lineNumbers: false,
				sourceMap: true,
				keepBreaks: false,
				errors: true,
				warnings: true
			},
			target: {
				files: [{
					expand: true,
					cwd: 'public/css/',
					src: [
						'main.css'
					],
					dest: 'public/css/',
					ext: '-min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('js', ['browserify:build']);
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('dist', ['js', 'uglify', 'css', 'cssmin']);
	grunt.registerTask('default', ['js', 'css']);
};