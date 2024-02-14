import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import router from '@/router'


const customTags = [
    "inkscape:perspective",
    "sodipodi:namedview",
    "dc:format",
    "dc:type",
    "dc:title",
    "cc:Work",
    "rdf:RDF"
];

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => {
    return customTags.reduce((p, c) => p || tag.startsWith(c), false);
}
window.encryptKey = "valentines_2023_ipy849";
app.use(router).mount('#app');
