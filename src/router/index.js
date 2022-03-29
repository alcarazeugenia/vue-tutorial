import { createRouter, createWebHistory } from "vue-router";

import AboutComponent from "../views/About.vue";
import HomeComponent from "../views/Home.vue";

const routes = [
	{
		path: "/about",
		name: "About",
		component: AboutComponent,
	},
	{
		path: "/",
		name: "Home",
		component: HomeComponent,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
