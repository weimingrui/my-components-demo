/*
 * @Author: Arthur
 * @Date: 2020-04-22 17:38:50
 * @LastEditors: Arthur
 * @LastEditTime: 2021-01-17 20:58:33
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import InputValidcation from '@/components/input-varification'
// function changStr(str){
//   return str.charAt(0).toUpperCase()+str.slice(1)  
// }
// export default {
//   install(Vue) {
//       const requireAll=require.context("./components",false,/\.vue$/)
//       requireAll.keys().forEach((item)=>{
//           Vue.component(changStr(item.replace(/\.\//,'').replace(/\.vue$/,'')),requireAll(item).default)
//       })
//   }
// }
// function importAll(r: __WebpackModuleApi.RequireContext) {
//   let arr: any = []
//   r.keys().forEach((file: string) => {
//     let fileName = file.substr(2).split('.vue')[0]
//     if (fileName != 'Start') {
//       let firstLetter = fileName.charAt(0)
//       let lowerCase = fileName.replace(firstLetter, firstLetter.toLowerCase())
//       arr.push({
//         path: `/${lowerCase}`,
//         name: lowerCase,
//         // component: () => import(`@/views/${fileName}.vue`)
//         component: (resolve: any) =>
//           require([`@/views/${fileName}.vue`], resolve)
//       })
//     }
//   })
//   return arr
// }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/input-varification',
      name: 'InputValidcation',
      component: InputValidcation
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
  ]
})
