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

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => {
    return customTags.reduce((p, c) => p || tag.startsWith(c), false);
}
app.use(router).mount('#app');
