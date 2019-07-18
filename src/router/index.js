import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from '../components/AboutPage';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'about',
			component: AboutPage,
		},
	],
});
