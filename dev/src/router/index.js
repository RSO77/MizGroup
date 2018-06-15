import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

// import Index from '@/components/pages/Index';
import Check_in from '@/components/pages/Check_in';
import Reg from '@/components/pages/Reg';


const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {

            path: '/',
            name: 'Check_in',
            meta: {
                gradients: [
                    ['#bac3d2', '#ffffff']
                ]
            },
            component: Check_in
        },
        {
            path: '/reg',
            name: 'Reg',
            meta: {
                gradients: [
                    ['#bac3d2', '#ffffff']
                ]
            },
            component: Reg
        }

    ]
})

export default router;

// var granimInstance = new Granim({
//     element: '#canvas-brand',
//     name: 'basic-gradient',
//     direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#bac3d2', '#ffffff']
//             ]
//         }
//     }
// });
