import { createStore } from 'vuex';
import { auth } from './auth.module';
import { profile } from './profile.module';
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  modules: {
    auth,
    profile
  },
  plugins: [createPersistedState()],
});

export default store;
