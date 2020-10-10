import Vue from 'vue';
import Vuex from 'vuex';
import farm from './farm';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    farm: {
      namespaced: true,
      ...farm,
    },
  },
});