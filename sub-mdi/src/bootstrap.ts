import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
const mount = (el: any) => {
  const app = createApp(App)
  app.use(vuetify);
  app.mount(el);
}

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_mdi-dev-root');
  if (el) {
    mount(el);
  }
}

// we are running through container, export the mount function
export { mount };
