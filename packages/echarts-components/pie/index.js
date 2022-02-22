// 导入组件，组件必须声明 name
import Pie from './src/pie.vue'

Pie.install = function (Vue) {
    Vue.component(Pie.name, Pie)
}

export default Pie
