import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/flows'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/flows",
                name: "Flows",
                meta: {
                    title: '工作流管理'
                },
                component: () => import ("../views/Flows.vue")
            },
            {
                path: "/flows/editor",
                name: "Editor",
                meta: {
                    title: '编辑工作流'
                },
                component: () => import ("../views/Editor.vue"),
                props: route => ({flowId: route.query.flowId})
            },
            {
                path: "/flows/nodeTypes",
                name: "NodeTypes",
                meta: {
                    title: '节点类型管理'
                },
                component: () => import ("../views/NodeTypes.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `flow-eda-vue`;
    next();
});

export default router;
