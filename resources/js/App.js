import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

export default class App {
    constructor (components, domId) {
        const el = domId || '#app';
        new Vue({ el, components, vuetify: new Vuetify({
                theme: {
                    dark: true,
                }
            })
        });
    }
}