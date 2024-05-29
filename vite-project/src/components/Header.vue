<script setup>
import Icon from './Icon.vue';
</script>

<template>
    <header class="page-header">
        <div class="page-header__wrapper container">
            <a
                class="page-header__logo"
                href="#"
                target="_blank"
            >
                <span class="visually-hidden">
                    Eatly Logotype
                </span>
                <Icon iconClass="page-header__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
            </a>
            <nav class="page-header__navigation menu">
                <a
                    class="menu__link"
                    href="#"
                    target="_blank"
                >
                    Menu
                </a>
                <a
                    class="menu__link"
                    href="#"
                    target="_blank"
                >
                    Blog
                </a>
                <a
                    class="menu__link"
                    href="#"
                    target="_blank"
                >
                    Pricing
                </a>
                <a
                    class="menu__link"
                    href="#"
                    target="_blank"
                >
                    Contact
                </a>
            </nav>
            <button class="menu__btn-close">
                <Icon iconName="close" iconWidth="32" iconHeight="32" />
            </button>
            <button class="page-header__menu-toggle burger">
                <span class="burger__item"></span>
                <span class="burger__item"></span>
                <span class="burger__item"></span>
            </button>
            <div class="page-header__auth menu--auth">
                <a
                    class="menu__auth-link btn"
                    href="#"
                    target="_blank"
                >
                    Login
                </a>
                <a
                    class="menu__auth-link menu__auth-link--sign-up btn"
                    href="#"
                    target="_blank"
                >
                    Sign Up
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">

</style>