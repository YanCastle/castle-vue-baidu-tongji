# castle-vue-tongji
Vue版本的百度统计，自动安装脚本及钩子注入
```typescript
// 安装
import Tongji from 'castle-vue-baidu-tongji'
Vue.install(Tongji,{id:'站点ID'})
//使用
import {tongji} from 'castle-vue-baidu-tongji'
tongji.pv()
```