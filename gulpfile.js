var gulp=require('gulp');


var sass = require("gulp-sass");

//sass编译
gulp.task("sassfile",function(){
	gulp.src(["scss/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\css"));
});

gulp.task("copyhtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\"));
});
//复制图片文件
gulp.task("images",function(){
	gulp.src("imgs/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\imgs"));
});
//复制js
gulp.task("copyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\js"));
});
//启动监听器
gulp.task("watch",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("imgs/*.{jpg,png}",["images"]);
	gulp.watch("scss/*.scss",["sassfile"])
});
