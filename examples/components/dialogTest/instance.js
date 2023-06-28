import { createApp } from 'vue'
import ErrorMsg from './index.vue'

// vue.js3.0替代vue.js2.0的extend挂载方式
const MsgConstructor = createApp(ErrorMsg)
const instance = MsgConstructor.mount()

console.log(ErrorMsg)

// const instance = new MsgConstructor()
// instance.mount()
// document.body.appendChild(instance.$el)
export default instance
