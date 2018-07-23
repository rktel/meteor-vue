import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from '/import/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});