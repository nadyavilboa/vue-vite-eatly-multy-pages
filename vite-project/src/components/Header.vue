<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    },
    data() {
        return {
            isMobileMenuOpen: false
        }
    },
    computed: {
        url() {
            return window.location.pathname;
        },
        isMobile () {
            return window.innerWidth < 768;
        },
    },
    methods: {
        toggleMobileMenu () {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>

<template>
    <header class="page-header">
        <div class="page-header__wrapper container">
            <router-link :to="{ path: '/'}" target="_blank">
                <span class="page-header__logo">
                    <span class="visually-hidden">
                        Eatly Logotype
                    </span>
                    <Icon iconClass="page-header__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                </span>
            </router-link>
            <nav class="page-header__navigation menu" :class="{'menu--open': this.isMobileMenuOpen}">
                <router-link :to="{ path: '/menu'}" target="_blank">
                    <span class="menu__link" :class="this.url == '/menu' ? 'menu__link--active' : ''">
                        Menu
                    </span>
                </router-link>
                <router-link :to="{ path: '/blog'}" target="_blank">
                    <span class="menu__link" :class="this.url == '/blog' ? 'menu__link--active' : ''">
                        Blog
                    </span>
                </router-link>
                <router-link :to="{ path: '/pricing'}" target="_blank">
                    <span class="menu__link" :class="this.url == '/pricing' ? 'menu__link--active' : ''">
                        Pricing
                    </span>
                </router-link>
                <router-link :to="{ path: '/contact'}" target="_blank">
                    <span class="menu__link" :class="this.url == '/contact' ? 'menu__link--active' : ''">
                        Contact
                    </span>
                </router-link>
            </nav>
            <button class="menu__btn-close" @click="toggleMobileMenu">
                <Icon iconName="close" iconWidth="32" iconHeight="32" />
            </button>
            <button class="page-header__menu-toggle burger" @click="toggleMobileMenu">
                <span class="burger__item"></span>
                <span class="burger__item"></span>
                <span class="burger__item"></span>
            </button>
            <div class="page-header__auth menu--auth">
                <router-link :to="{ path: '/login'}" target="_blank">
                    <span class="menu__auth-link btn" :class="this.url == '/login' ? 'menu__auth-link--active' : ''">
                        Login
                    </span>
                </router-link>
                <router-link :to="{ path: '/signup'}" target="_blank">
                    <span class="menu__auth-link menu__auth-link--sign-up btn" :class="this.url == '/signup' ? 'active' : ''">
                        Sign Up
                    </span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<style lang="scss">

</style>