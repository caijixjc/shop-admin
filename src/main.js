import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

// 1.引入element-ui
import ElementUI from 'element-ui';
// 2.引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
//1.引入axios
import axios from 'axios'
//引入组件
import Login from './pages/Login.vue';
import Admin from './pages/Admin.vue';
import GoodsList from './pages/GoodsList.vue';
import CategoryList from './pages/CategoryList.vue';





// 3.全局注册组件
Vue.use(ElementUI);
Vue.use(VueRouter);


//2.把axios绑定到vue实例的属性$axios
Vue.prototype.$axios=axios;


const routes=[
  {
    path: "/", 
    redirect: "/admin/goods-list",
    meta: "首页"},
  {
    path: "/login", 
    component: Login, 
    meta: "登录"
  },
  {
    path: "/admin", 
    component: Admin,
    meta: "后台管理", 
    children: [
      {
        path: "goods-list", 
        component: GoodsList,
        meta: "商品列表"
      },
      {
        path: "category-list", 
        component: CategoryList ,
        meta: "栏目列表"
      }
    ]
  }
]

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
