import { createRouter, createWebHistory } from "vue-router";

import Main from './../views/Main.vue';
import Blog from './../views/Blog.vue';
import BlogArticle from './../views/BlogArticle.vue';
import Contact from './../views/Contact.vue';
import Login from './../views/Login.vue';
import Menu from './../views/Menu.vue';
import AboutUs from './../views/AboutUs.vue';
import Order from './../views/Order.vue';
import Pricing from './../views/Pricing.vue';
import Restaurant from './../views/Restaurant.vue';
import SignUp from './../views/SignUp.vue';
import ForgotPassword from './../views/ForgotPassword.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/blog-article',
        name: 'blogArticle',
        component: BlogArticle,
        props: true,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        props: true,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing,
    },
    {
        path: '/restaurant',
        name: 'restaurant',
        component: Restaurant,
        props: true,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
    {
        path: '/forgetpass',
        name: 'forgetpass',
        component: ForgotPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;