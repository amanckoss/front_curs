import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import {store} from "./store";

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line no-unused-vars
const messageApi = Vue.resource('/user/all');

Vue.component('tableData-list', {
    props: ['tableData'],
    data: function() {
        return {
            message: null
        }
    },
    created: function() {
        messageApi.get().then(result =>
            result.json().then(data =>
                data.forEach(message => this.tableData.push(message))
            )
        )
    },
    methods: {
        editMethod: function(message) {
            this.message = message;
        }
    }
});
