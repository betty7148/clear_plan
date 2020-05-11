import ToDoList from './components/ToDoList.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import DaoJiShi from './components/DaoJiShi.vue';
import Plan from './components/Plan.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';
const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/Home',
        redirect:'/Home/ToDolist',
        component: Home,
        children: [{
            path: '/Home/ToDoList',
            component: ToDoList
        },
        {
            path: '/Home/Plan',
            component: Plan
        }]
    },
    {
        path: '/DaoJiShi',
        component: DaoJiShi
    },
    {
        path: '/index',
        component: Index
    }
];
const router = new VueRouter({
    routes
})
export default router;