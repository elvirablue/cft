var browserSync = require('browser-sync');

browserSync({
	server: "app",
	files: ["app/*.html", "app/js/*.js", "app/css/*.css", "app/api/*.json"]
});