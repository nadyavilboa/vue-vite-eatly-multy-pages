<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon
    },
    data() {
        return {
            isMobileMenuOpen: false,
            isNotSign: false,
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
        },
        checkSign() {
            this.isNotSign = this.url != '/login' && this.url != '/signup' && this.url != '/forgetpass';
        },
    },
    created() {
        this.checkSign();
    }
}
</script>

<template>
    <header class="page-header" :class="{'with-bottom-border': this.isNotSign}">
        <div class="page-header__wrapper container">
            <router-link :to="{ path: '/'}">
                <span class="page-header__logo">
                    <span class="visually-hidden">
                        Eatly Logotype
                    </span>
                    <Icon iconClass="page-header__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                </span>
            </router-link>
            <nav class="page-header__navigation menu" :class="{'menu--open': this.isMobileMenuOpen}" v-if="this.isNotSign">
                <router-link :to="{ path: '/menu'}">
                    <span class="menu__link" :class="this.url == '/menu' ? 'menu__link--active' : ''">
                        Menu
                    </span>
                </router-link>
                <router-link :to="{ path: '/blog'}">
                    <span class="menu__link" :class="this.url == '/blog' ? 'menu__link--active' : ''">
                        Blog
                    </span>
                </router-link>
                <router-link :to="{ path: '/pricing'}">
                    <span class="menu__link" :class="this.url == '/pricing' ? 'menu__link--active' : ''">
                        Pricing
                    </span>
                </router-link>
                <router-link :to="{ path: '/contact'}">
                    <span class="menu__link" :class="this.url == '/contact' ? 'menu__link--active' : ''">
                        Contact
                    </span>
                </router-link>
            </nav>
            <button class="menu__btn-close" v-if="this.isNotSign" @click="toggleMobileMenu">
                <Icon iconName="close" iconWidth="32" iconHeight="32" />
            </button>
            <button class="page-header__menu-toggle burger" v-if="this.isNotSign" @click="toggleMobileMenu">
                <span class="burger__item"></span>
                <span class="burger__item"></span>
                <span class="burger__item"></span>
            </button>
            <div class="page-header__auth menu--auth" v-if="this.isNotSign">
                <router-link :to="{ path: '/login'}" >
                    <span class="menu__auth-link btn" :class="this.url == '/login' ? 'menu__auth-link--active' : ''">
                        Login
                    </span>
                </router-link>
                <router-link :to="{ path: '/signup'}" >
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