<script setup>
import Icon from './Icon.vue';
</script>

<template>
    <footer class="page-footer">
        <div class="page-footer__wrapper container">
            <div class="page-footer__top">
                <a
                    class="page-footer__logo page-footer__logo--mobile"
                    href="#"
                    target="_blank"
                >
                    <span class="visually-hidden">
                        Eatly Logotype
                    </span>
                    <Icon iconClass="page-footer__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                </a>
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
                <a
                    class="page-footer__logo page-footer__logo--tablet"
                    href="#"
                    target="_blank"
                >
                    <span class="visually-hidden">
                        Eatly Logotype
                    </span>
                    <Icon iconClass="page-footer__logo-icon" iconName="logo" iconWidth="112" iconHeight="42" />
                </a>
                <ul class="page-footer__menu">
                    <li class="page-footer__menu-item">
                        <a
                            class="page-footer__menu-link"
                            href="#"
                            target="_blank"
                        >Blog</a>
                    </li>
                    <li class="page-footer__menu-item">
                        <a
                            class="page-footer__menu-link"
                            href="#"
                            target="_blank"
                        >Pricing</a>
                    </li>
                    <li class="page-footer__menu-item">
                        <a
                            class="page-footer__menu-link"
                            href="#"
                            target="_blank"
                        >About Us</a>
                    </li>
                    <li class="page-footer__menu-item">
                        <a
                            class="page-footer__menu-link"
                            href="#"
                            target="_blank"
                        >Contact</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer__copyright page-footer__copyright--mobile">
                © 2023 <span class="company-name">Eatly</span> All Rights Reserved.
            </div>
        </div>
    </footer>
</template>