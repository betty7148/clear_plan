import ToDoList from './components/ToDoList.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import DaoJiShi from './components/DaoJiShi.vue';
import Plan from './components/Plan.vue';
const routes = [
    {
        path: '/',
        redirect: '/DaoJiShi',
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
    }
];
const router = new VueRouter({
    routes
})
export default router;