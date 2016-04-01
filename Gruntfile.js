module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/foundation.css': 'node_modules/foundation-sites/assets/foundation.scss',
					'dist/style.css': 'css/style.scss',
					'dist/media.scss': 'css/media.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/output.css': [
						'css/foundation.css', 
						'css/style.css',
						'css/media.css'
						]
				}
			}
		},
		watch: {
			css: {
				files: ['css/*.scss'],
				tasks: ['sass','cssmin']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass','cssmin']);

};