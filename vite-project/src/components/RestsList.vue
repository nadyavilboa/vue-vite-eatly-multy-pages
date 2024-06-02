<script setup>
import Icon from './../components/Icon.vue';
</script>

<template>
    <section class="top-rests">
        <div class="top-rests__wrapper container">
            <h2 class="top-rests__title text-title">
                <span class="text-bold">
                    Our Top <span class="text-violet">Restaurants</span>
                </span>
            </h2>
            <ul class="top-rests__list">
                <li class="top-rests__item">
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/rest1-desktop.webp 1x, ./../assets/img/rest1-desktop-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/rest1-tablet.webp 1x, ./../assets/img/rest1-tablet-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/rest1.webp 1x, ./../assets/img/rest1-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/rest1-desktop.png 1x, ./../assets/img/rest1-desktop-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/rest1-tablet.png 1x, ./../assets/img/rest1-tablet-@2x.png 2x"/>
                        <img
                            class="top-rests__img"
                            src="./../assets/img/rest1.png"
                            srcset="./../assets/img/rest1-@2x.png 2x"
                            width="315"
                            height="140"
                            alt="Chicken"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-rests__info">
                        <span class="top-rests__stiker stiker">Healthy</span>
                        <a
                            class="top-rests__name"
                            href="#"
                            target="_blank"
                        >
                            The Chicken King
                        </a>
                        <span class="top-rests__group-text">
                            <span class="top-rests__time">24min •</span>
                            <span class="top-rests__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-rests__rating-value">4.8</span>
                            </span>
                        </span>
                        <button class="top-rests__btn-mark" aria-label="save rest">
                            <Icon iconName="save" iconWidth="12" iconHeight="16" fill="currentColor" />
                        </button>
                    </div>
                </li>
                <li class="top-rests__item">
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/rest2-desktop.webp 1x, ./../assets/img/rest2-desktop-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/rest2-tablet.webp 1x, ./../assets/img/rest2-tablet-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/rest2.webp 1x, ./../assets/img/rest2-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/rest1-desktop.png 1x, ./../assets/img/rest1-desktop-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/rest1-tablet.png 1x, ./../assets/img/rest1-tablet-@2x.png 2x"/>
                        <img
                            class="top-rests__img"
                            src="./../assets/img/rest2.png"
                            srcset="./../assets/img/rest2-@2x.png 2x"
                            width="315"
                            height="140"
                            alt="Hamburger"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-rests__info">
                        <span class="top-rests__stiker stiker stiker--red">Trending</span>
                        <a
                            class="top-rests__name"
                            href="#"
                            target="_blank"
                        >
                            The Burger King
                        </a>
                        <span class="top-rests__group-text">
                            <span class="top-rests__time">24min •</span>
                            <span class="top-rests__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-rests__rating-value">4.9</span>
                            </span>
                        </span>
                        <button class="top-rests__btn-mark" aria-label="save rest">
                            <Icon iconName="save" iconWidth="12" iconHeight="16" fill="currentColor" />
                        </button>
                    </div>
                </li>
                <li class="top-rests__item">
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/rest2-desktop.webp 1x, ./../assets/img/rest2-desktop-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/rest2-tablet.webp 1x, ./../assets/img/rest2-tablet-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/rest2.webp 1x, ./../assets/img/rest2-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/rest1-desktop.png 1x, ./../assets/img/rest1-desktop-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/rest1-tablet.png 1x, ./../assets/img/rest1-tablet-@2x.png 2x"/>
                        <img
                            class="top-rests__img"
                            src="./../assets/img/rest2.png"
                            srcset="./../assets/img/rest2-@2x.png 2x"
                            width="315"
                            height="140"
                            alt="Hamburger"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-rests__info">
                        <span class="top-rests__stiker stiker stiker--red">Trending</span>
                        <a
                            class="top-rests__name"
                            href="#"
                            target="_blank"
                        >
                            The Burger King
                        </a>
                        <span class="top-rests__group-text">
                            <span class="top-rests__time">24min •</span>
                            <span class="top-rests__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-rests__rating-value">4.9</span>
                            </span>
                        </span>
                        <button class="top-rests__btn-mark" aria-label="save rest">
                            <Icon iconName="save" iconWidth="12" iconHeight="16" fill="currentColor" />
                        </button>
                    </div>
                </li>
            </ul>
            <a
                class="top-rests__full-link full-link"
                href="#"
                target="_blank"
            >
                <span class="top-rests__text-link">View All</span>
                <Icon iconName="arrow-full-link" iconWidth="16" iconHeight="16" />
            </a>
        </div>
    </section>
</template>