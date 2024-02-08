import {createRouter, createWebHistory} from 'vue-router';
import VueViews from '@/views';
import IllustrationComponents from '@/components/content';
import AES from "crypto-js/aes";
import EncUTF8 from "crypto-js/enc-utf8";


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
                props: route => {
                  const decrypted = AES.decrypt(route.query.msg, window.encryptKey);
                  const message = decrypted.toString(EncUTF8);
                  return {message};
                }
            });
          }
          return childrenObject;
        })(),
    },
]
const router = createRouter({history: createWebHistory(), routes})
export default router
