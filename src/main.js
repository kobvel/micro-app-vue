import Vue from 'vue'
import App from './App.vue'



const store = window['store'];
store.subscribe(() => {
  const loadState = store.getState().load;

  if (loadState.script === 'vue' && loadState.completed) {
    new Vue({
      el: '#app',
      render: h => h(App)
    });
  }
});
