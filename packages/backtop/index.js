// 导入组件，组件必须声明 name
import Backtop from './src/backtop.vue'

Backtop.install = function (Vue) {
    Vue.component(Backtop.name, Backtop)
}

export default Backtop
