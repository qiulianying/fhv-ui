// 导入组件，组件必须声明 name
import Imgverification from './src/imgverification.vue'

Imgverification.install = function (Vue) {
    Vue.component(Imgverification.name, Imgverification)
}

export default Imgverification
