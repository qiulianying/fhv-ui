// 导入组件，组件必须声明 name
import Verification from './src/verification.vue'

Verification.install = function (Vue) {
    Vue.component(Verification.name, Verification)
}

export default Verification
