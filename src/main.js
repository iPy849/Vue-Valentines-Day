import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import router from '@/router'
import CopyText from "@meforma/vue-copy-to-clipboard";


const customTags = [
    "inkscape:perspective",
    "sodipodi:namedview",
    "dc:format",
    "dc:type",
    "dc:title",
    "cc:Work",
    "rdf:RDF"
];

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => {
    return customTags.reduce((p, c) => p || tag.startsWith(c), false);
}
window.encryptKey = "valentines_2023_ipy849";
app.use(router).use(CopyText).mount('#app');
