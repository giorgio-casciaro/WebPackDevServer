declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import * as Vue from 'vue'
import * as  VueRouter from 'vue-router'

Vue.use(VueRouter);

//Lazy loading components con webpack:
//
// var lazyLoad=function(resolve,path:string,extraPaths:Array<string>=[]){
//   extraPaths.push(path);
//   require.ensure(extraPaths, function(require) {
//     extraPaths.pop();
//     var LoadedComponents = extraPaths.map((value,index)=>{return require(value)});
//     resolve(require(path));
//   });
// }

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    {
      path: '/',
      components: {
        main: (resolve)=>require.ensure(["components/templates/home"], (require)=>resolve(require("components/templates/home")))
      }
    }
  ]
})
export default router;
