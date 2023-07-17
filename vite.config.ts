import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve } from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import process from 'process'
function pathResolve(dir:string ):string{
	return resolve(process.cwd(),'.',dir)
}
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	resolve:{
		alias:{
			'@':pathResolve('src')
		}
	},
	server:{
		host:'0.0.0.0',
		port: 8848,
		open:true ,//自动打开浏览器
		proxy: {  //跨域处理
			'/api':{
				target: 'http://localhost:8849/api',
				changeOrigin:true,
				rewrite:(path)=>path.replace(/^\/api/,'')
			}
			
		}
	}

});
