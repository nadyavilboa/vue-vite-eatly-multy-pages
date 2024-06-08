<script>
import Icon from './Icon.vue';

export default {
    components: {
        Icon,
    },
    computed: {
        url() {
            return window.location.pathname;
        }
    }
}
</script>

<template>
    <footer class="page-footer">
        <div class="page-footer__wrapper container">
            <div class="page-footer__top">
                <router-link :to="{ path: '/'}" target="_blank">
                    <span class="page-footer__logo page-footer__logo--mobile">
                        <span class="visually-hidden">
                            Eatly Logotype
                        </span>
                        <Icon iconClass="page-footer__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                    </span>
                </router-link>
                <span class="page-footer__wrapper--top">
                    <span class="page-footer__copyright page-footer__copyright--tablet">
                        © 2023 <span class="company-name">Eatly</span> All Rights Reserved.
                    </span>
                    <span class="page-footer__social-links">
                        <a
                            class="page-footer__social-link"
                            href="#"
                            target="_blank"
                        >
                            <Icon iconName="instagram" iconWidth="16" iconHeight="16" />
                        </a>
                        <a
                            class="page-footer__social-link"
                            href="#"
                            target="_blank"
                        >
                            <Icon iconName="linkedin" iconWidth="16" iconHeight="15" />
                        </a>
                        <a
                            class="page-footer__social-link"
                            href="#"
                            target="_blank"
                        >
                            <Icon iconName="facebook" iconWidth="7" iconHeight="16" />
                        </a>
                        <a
                            class="page-footer__social-link"
                            href="#"
                            target="_blank"
                        >
                            <Icon iconName="twitter" iconWidth="16" iconHeight="13" />
                        </a>
                    </span>
                </span>
            </div>
            <div class="page-footer__wrapper--bottom">
                <router-link :to="{ path: '/'}" target="_blank">
                    <span class="page-footer__logo page-footer__logo--tablet">
                        <span class="visually-hidden">
                            Eatly Logotype
                        </span>
                        <Icon iconClass="page-footer__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                    </span>
                </router-link>
                <ul class="page-footer__menu">
                    <li class="page-footer__menu-item">
                        <router-link :to="{ path: '/blog'}" target="_blank">
                            <span class="page-footer__menu-link" :class="this.url == '/blog' ? 'page-footer__menu-link--active' : ''">
                                Blog
                            </span>
                        </router-link>
                    </li>
                    <li class="page-footer__menu-item">
                        <router-link :to="{ path: '/pricing'}" target="_blank">
                            <span class="page-footer__menu-link" :class="this.url == '/pricing' ? 'page-footer__menu-link--active' : ''">
                                Pricing
                            </span>
                        </router-link>
                    </li>
                    <li class="page-footer__menu-item">
                        <router-link :to="{ path: '/pricing'}" target="_blank">
                            <span class="page-footer__menu-link" :class="this.url == '/aboutus' ? 'page-footer__menu-link--active' : ''">
                                About Us
                            </span>
                        </router-link>
                    </li>
                    <li class="page-footer__menu-item"> 
                        <router-link :to="{ path: '/pricing'}" target="_blank">
                            <span class="page-footer__menu-link" :class="this.url == '/contact' ? 'page-footer__menu-link--active' : ''">
                                Contact
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="page-footer__copyright page-footer__copyright--mobile">
                © 2023 <span class="company-name">Eatly</span> All Rights Reserved.
            </div>
        </div>
    </footer>
</template>