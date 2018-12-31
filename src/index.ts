import * as tj from 'castle-baidu-tj'
export const tongji = tj;
export default {
    install: (Vue: any, options: { id: string }) => {
        if (!options.id) {
            console.error('统计插件必须传入站点编号')
            return;
        }
        Vue.prototype.$tj = tj;
        tj.install(options.id);
    }
}