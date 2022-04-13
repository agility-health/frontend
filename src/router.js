import { createWebHistory, createRouter } from 'vue-router';
import Login from './components/registration/Login';
import Register from './components/registration/Register';
import Profile from './components/registration/Profile';
import Home from './components/registration/Home';
// lazy-loaded

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/registration',
    component: Register,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
