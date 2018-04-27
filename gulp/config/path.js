module.exports = {
	JS: [
		//	JQUERY
		'node_modules/jquery/dist/jquery.js'
		// 'node_modules/svgxuse/svgxuse.js' //иконки для загрузки из внешнего источника
	],

	TASKS: [
		'./gulp/tasks/commonJs.js',
		'./gulp/tasks/appJs.js',
		'./gulp/tasks/copy.js',
		'./gulp/tasks/clear.js',
		'./gulp/tasks/styles.js',
		'./gulp/tasks/pug.js',
		'./gulp/tasks/serve.js',
		'./gulp/tasks/watch.js'
	],
	ROOT: 'build'
};