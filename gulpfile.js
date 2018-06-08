var gulp=require('gulp');


var sass = require("gulp-sass");

//sass编译
gulp.task("sassfile",function(){
	gulp.src(["scss/index.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\css"));
});

gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\"));
});
//复制图片文件
gulp.task("images",function(){
	gulp.src("imgs/*.{jpg,png}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\handu\\imgs"));
});
//启动监听器
gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("imgs/*.{jpg,png}",["images"]);
	gulp.watch("scss/index.scss",["sassfile"])
});
