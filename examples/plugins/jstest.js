/*
* Object.defineProperty 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
*
* */
const object1 = {}
Object.defineProperty(object1, 'prototype1', {
    value: 42,
    writable: false
})
console.log(object1.prototype1)

const object2 = {}
Object.defineProperty(object2, 'hello', {
    get: function() {
        return object2
    },
    set: function (v) {
        console.log('set' + v)
        return v
    }
})
object2.hello = '111'

