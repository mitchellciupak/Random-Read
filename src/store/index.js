import Vue from 'vue'
import Vuex from 'vueex';

import user from './modules/user';
import books from './modules/books';

Vue.use(Vuex);

export defualt new Vuex.Store({
  modules: {
    user,
    books,
  },
});