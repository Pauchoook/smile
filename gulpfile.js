// Імпорт основного модуля
import gulp from "gulp";
// Імпорт загальних плагінів
import { plugins } from "./config/gulp-plugins.js";
// Імпорт шляхів
import { path } from "./config/gulp-settings.js";

// Передаємо значення у глобальну змінну
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	isWebP: !process.argv.includes('--nowebp'),
	isImgOpt: !process.argv.includes('--noimgopt'),
	isFontsReW: process.argv.includes('--rewrite'),
	gulp: gulp,
	path: path,
	plugins: plugins
}

// Імпорт завдань
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { css } from "./config/gulp-tasks/css.js";
import { js } from "./config/gulp-tasks/js.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { WebP, imagesOptimize, copySvg } from "./config/gulp-tasks/images.js";
import { ftp } from "./config/gulp-tasks/ftp.js";
import { zip } from "./config/gulp-tasks/zip.js";
import { sprite } from "./config/gulp-tasks/sprite.js";
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff2, woff2Copy, fontsStyle } from "./config/gulp-tasks/fonts.js";

// Послідовна обробка шрифтів
const fonts = gulp.series(reset, otfToTtf, ttfToWoff2, woff2Copy, fontsStyle);
// Порядок виконання завдань для режиму розробник
const devTasks = gulp.series(fonts, gitignore);
// Порядок виконання завдань для режиму продакшн
const buildTasks = gulp.series(fonts, jsDev, js, gulp.parallel(html, css, gulp.parallel(imagesOptimize, copySvg), gitignore));

// Експорт завдань
export { html }
export { css }
export { js }
export { jsDev }
export { fonts }
export { sprite }
export { ftp }
export { zip }

// Побудова сценаріїв виконання завдань
const development = devTasks;
const build = buildTasks;
const deployFTP = gulp.series(buildTasks, ftp);
const deployZIP = gulp.series(buildTasks, zip);

// Експорт сценаріїв
export { development }
export { build }
export { deployFTP }
export { deployZIP }

// Виконання сценарію за замовчуванням
gulp.task('default', development);






