/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = 'http://localhost:8082'; 
let routerMode = 'hash';
let baseImgPath;

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'http://localhost:8082';
//     baseImgPath = '/img/';
// }else{
// 	baseUrl = '//elm.cangdu.org';
//     baseImgPath = '//elm.cangdu.org/img/';
// }

export {
	baseUrl,
	routerMode,
	baseImgPath
}