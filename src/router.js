import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '@/views/Home';
import Settlements from '@/views/Settlements/Settlements';
import SettlementsNew from '@/views/Settlements/Settlements-New';
import Settlement from '@/views/Settlement/Settlement';
import SettlementDead from '@/views/Settlement/Settlement-Dead';
import SettlementAlive from '@/views/Settlement/Settlement-Alive';
import SettlementHunt from '@/views/Settlement/Settlement-Hunt';

import SurvivorNew from '@/views/Survivor/Survivor-New';
import SurvivorManage from '@/views/Survivor/Survivor';
import SurvivorsManage from '@/views/Survivor/Survivors';
import Login from '@/views/Login.vue';
import Logout from '@/views/Logout.vue';
import Survivors from '@/views/Survivors';
// import SurvivorsNew from '@/views/Survivors-New';
import SurvivorsDetail from '@/views/Survivors-Detail';
import SurvivorsGroup from '@/views/Survivors-Group';

// Admin
import AdminRebuild from '@/views/Admin/AdminRebuild';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				requiresNoAuth: true
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {
				requiresNoAuth: true
			}
		},
		{
			path: '/logout',
			name: 'Logout',
			component: Logout,
			meta: {
				requiresAuth: true
			}
		},

		// #region Admin
		// TODO only admins see this
		{
			path: '/admin/rebuild',
			name: 'AdminRebuild',
			component: AdminRebuild,
			meta: {
				requiresAdmin: true,
				requiresAuth: true
			}
		},
		// #endregion

		// #region Settlements
		{
			path: '/settlements',
			name: 'Settlements',
			component: Settlements,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/settlements/new',
			name: 'Settlements-New',
			component: SettlementsNew,
			meta: {
				requiresAuth: true
			}
		},
		// #endregion

		// #region Settlement
		{
			path: '/settlements/:settlementId',
			component: Settlement,
			props: true,
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: '',
					name: 'Settlement',
					props: true,
					component: SettlementAlive
				},
				{
					path: 'dead',
					name: 'SettlementDead',
					props: true,
					component: SettlementDead
				},
				{
					path: 'hunt',
					name: 'SettlementHunt',
					props: true,
					component: SettlementHunt
				}
			]
		},
		{
			path: '/settlements/:settlementId/survivor/new',
			name: 'Survivor-New',
			component: SurvivorNew,
			props: true,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/settlements/:settlementId/survivors/:survivorId',
			name: 'Survivors',
			component: SurvivorsManage,
			props: true,
			meta: {
				requiresAuth: true
			}
		},
		// {
		// 	path: '/settlements/:settlementId/survivors/:survivorId',
		// 	name: 'Survivors',
		// 	component: SurvivorsManage,
		// 	props: route => ({
		// 		survivorId: route.params.survivorId,
		// 		settlementId: route.params.settlementId,
		// 		survivors: !route.query.s || route.query.s.split(',')
		// 	}),
		// 	meta: {
		// 		requiresAuth: true
		// 	}
		// },
		{
			path: '/settlements/:settlementId/survivor/:survivorId',
			name: 'Survivor',
			component: SurvivorManage,
			props: true,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/survivors',
			name: 'survivors',
			component: Survivors,
			meta: {
				requiresAuth: true
			}
		},
		// {
		// 	path: '/survivors/new',
		// 	name: 'survivors-new',
		// 	component: SurvivorsNew,
		// 	meta: {
		// 		requiresAuth: true,
		// 	},
		// },
		{
			path: '/survivors/group',
			name: 'survivors-group',
			component: SurvivorsGroup,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/survivors/:id',
			name: 'survivors-detail',
			component: SurvivorsDetail,
			props: true,
			meta: {
				requiresAuth: true
			}
		}
	]
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		const isUser = firebase.auth().currentUser;
		if (!isUser) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
		} else {
			next();
		}
	} else if (to.matched.some(record => record.meta.requiresNoAuth)) {
		const isUser = firebase.auth().currentUser;
		if (isUser) {
			next({
				path: '/settlements'
			});
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
	}
});

export default router;
