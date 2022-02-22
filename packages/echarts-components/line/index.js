// 导入组件，组件必须声明 name
import Line from './src/line.vue'

Line.install = function (Vue) {
    Vue.component(Line.name, Line)
}

export default Line
