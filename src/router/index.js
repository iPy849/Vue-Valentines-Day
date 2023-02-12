import {createRouter, createWebHistory} from 'vue-router';
import VueViews from '@/views';
import IllustrationComponents from '@/components/content';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: VueViews.HomeView
    }, {
        path: '/tpl',
        name: 'Template',
        component: VueViews.TemplateView,
        /*
           NOTE: Agrega los componentes de manera dinámica, para agregarlo solo
           es cuestión de registrarlo en @/components/content/index.js
        */
        children: (() => {
          const childrenObject = [];
          let i = 0;
          
          for (const key in IllustrationComponents) {
            childrenObject.push({
                path: (i++).toString(),
                name: key,
                component: IllustrationComponents[key],
                props: route => ({message: route.query.msg})
            });
          }
          return childrenObject;
        })(),
    },
]
const router = createRouter({history: createWebHistory(), routes})
export default router
