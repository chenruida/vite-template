const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/components/HelloWorld.vue"),
    },
    // {
    //     path: "/demo",
    //     name: "demo",
    //     component: () =>
    //         import(/* webpackChunkName: "demo" */ "@/views/demo/Demo.vue"),
    // },
]
export default routes