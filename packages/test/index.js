// 为组件提供install方法，供组件对外按需引入
import FhvTest from './src/test'
FhvTest.install = Vue => {
    Vue.component(FhvTest.name, FhvTest)
}
export default FhvTest

//vue提供install可供我们开发新的插件及全局注册组件等，
//install方法第一个参数是vue的构造器，第二个参数是可选的选项对象
