<script setup>
import Icon from './../components/Icon.vue';
</script>

<template>
    <section class="top-dishes">
        <div class="top-dishes__wrapper container">
            <h2 class="top-dishes__title text-title">
                <span class="text-bold">
                    Our Top <span class="text-violet">Dishes</span>
                </span>
            </h2>
            <ul class="top-dishes__list">
                <li class="top-dishes__item">
                    <button class="top-dishes__btn-heart" aria-label="save dish">
                        <Icon iconName="heart" iconWidth="14" iconHeight="12" />
                    </button>
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-1.webp 1x, ./../assets/img/food-desktop-1-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-1.webp 1x, ./../assets/img/food-tablet-1-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/food-mobile-1.webp 1x, ./../assets/img/food-mobile-1-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-1.png 1x, ./../assets/img/food-desktop-1-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-1.png 1x, ./../assets/img/food-tablet-1-@2x.png 2x"/>
                        <img
                            class="top-dishes__img top-dishes__img--big"
                            src="./../assets/img/food-mobile-1.png"
                            srcset="./../assets/img/food-mobile-1-@2x.png 2x"
                            width="131"
                            height="136"
                            alt="Chicken with vegetables"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-dishes__info">
                        <span class="top-dishes__stiker stiker">Healthy</span>
                        <a
                            class="top-dishes__name"
                            href="#"
                            target="_blank"
                        >
                            Chicken Hell
                        </a>
                        <span class="top-dishes__group-text">
                            <span class="top-dishes__time">24min •</span>
                            <span class="top-dishes__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-dishes__rating-value">4.8</span>
                            </span>
                        </span>
                    </div>
                    <div class="top-dishes__buy">
                        <span class="top-dishes__price">
                            <span class="top-dishes__big-price text-bold">$12</span>
                            <span class="top-dishes__small-price">.99</span>
                        </span>
                        <button class="top-dishes__btn-plus" aria-label="add dish">
                            <Icon iconName="plus" iconWidth="10" iconHeight="10" />
                        </button>
                    </div>
                </li>
                <li class="top-dishes__item">
                    <button class="top-dishes__btn-heart" aria-label="save dish">
                        <Icon iconName="heart" iconWidth="14" iconHeight="12" />
                    </button>
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-3.webp 1x, ./../assets/img/food-desktop-3-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-3.webp 1x, ./../assets/img/food-tablet-3-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/food-mobile-3.webp 1x, ./../assets/img/food-mobile-3-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-3.png 1x, ./../assets/img/food-desktop-3-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-3.png 1x, ./../assets/img/food-tablet-3-@2x.png 2x"/>
                        <img
                            class="top-dishes__img"
                            src="./../assets/img/food-mobile-3.png"
                            srcset="./../assets/img/food-mobile-3-@2x.png 2x"
                            width="131"
                            height="136"
                            alt="Pig with vegetables"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-dishes__info">
                        <span class="top-dishes__stiker stiker stiker--red">Trending</span>
                        <a
                            class="top-dishes__name"
                            href="#"
                            target="_blank"
                        >
                            Swe Dish
                        </a>
                        <span class="top-dishes__group-text">
                            <span class="top-dishes__time">34min •</span>
                            <span class="top-dishes__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-dishes__rating-value">4.9</span>
                            </span>
                        </span>
                    </div>
                    <div class="top-dishes__buy">
                        <span class="top-dishes__price">
                            <span class="top-dishes__big-price text-bold">$19</span>
                            <span class="top-dishes__small-price">.99</span>
                        </span>
                        <button class="top-dishes__btn-plus" aria-label="add dish">
                            <Icon iconName="plus" iconWidth="10" iconHeight="10" />
                        </button>
                    </div>
                </li>
                <li class="top-dishes__item">
                    <button class="top-dishes__btn-heart" aria-label="save dish">
                        <Icon iconName="heart" iconWidth="14" iconHeight="12" />
                    </button>
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-4.webp 1x, ./../assets/img/food-desktop-4-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-4.webp 1x, ./../assets/img/food-tablet-4-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/food-mobile-4.webp 1x, ./../assets/img/food-mobile-4-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-4.png 1x, ./../assets/img/food-desktop-4-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-4.png 1x, ./../assets/img/food-tablet-4-@2x.png 2x"/>
                        <img
                            class="top-dishes__img"
                            src="./../assets/img/food-mobile-4.png"
                            srcset="./../assets/img/food-mobile-4-@2x.png 2x"
                            width="131"
                            height="136"
                            alt="Fish with vegetables"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-dishes__info">
                        <span class="top-dishes__stiker stiker stiker--green">Supreme</span>
                        <a 
                            class="top-dishes__name"
                            href="#"
                            target="_blank"
                        >
                            Swe Dish
                        </a>
                        <span class="top-dishes__group-text">
                            <span class="top-dishes__time">34min •</span>
                            <span class="top-dishes__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-dishes__rating-value">4.9</span>
                            </span>
                        </span>
                    </div>
                    <div class="top-dishes__buy">
                        <span class="top-dishes__price">
                            <span class="top-dishes__big-price text-bold">$19</span>
                            <span class="top-dishes__small-price">.99</span>
                        </span>
                        <button class="top-dishes__btn-plus" aria-label="add dish">
                            <Icon iconName="plus" iconWidth="10" iconHeight="10" />
                        </button>
                    </div>
                </li>
                <li class="top-dishes__item">
                    <button class="top-dishes__btn-heart" aria-label="save dish">
                        <Icon iconName="heart" iconWidth="14" iconHeight="12" />
                    </button>
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-1.webp 1x, ./../assets/img/food-desktop-1-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-1.webp 1x, ./../assets/img/food-tablet-1-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/food-mobile-1.webp 1x, ./../assets/img/food-mobile-1-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-1.png 1x, ./../assets/img/food-desktop-1-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-1.png 1x, ./../assets/img/food-tablet-1-@2x.png 2x"/>
                        <img
                            class="top-dishes__img top-dishes__img--big"
                            src="./../assets/img/food-mobile-1.png"
                            srcset="./../assets/img/food-mobile-1-@2x.png 2x"
                            width="131"
                            height="136"
                            alt="Chicken with vegetables"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-dishes__info">
                        <span class="top-dishes__stiker stiker">Healthy</span>
                        <a
                            class="top-dishes__name"
                            href="#"
                            target="_blank"
                        >
                            Chicken Hell
                        </a>
                        <span class="top-dishes__group-text">
                            <span class="top-dishes__time">24min •</span>
                            <span class="top-dishes__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-dishes__rating-value">4.8</span>
                            </span>
                        </span>
                    </div>
                    <div class="top-dishes__buy">
                        <span class="top-dishes__price">
                            <span class="top-dishes__big-price text-bold">$12</span>
                            <span class="top-dishes__small-price">.99</span>
                        </span>
                        <button class="top-dishes__btn-plus" aria-label="add dish">
                            <Icon iconName="plus" iconWidth="10" iconHeight="10" />
                        </button>
                    </div>
                </li>
                <li class="top-dishes__item">
                    <button class="top-dishes__btn-heart" aria-label="save dish">
                        <Icon iconName="heart" iconWidth="14" iconHeight="12" />
                    </button>
                    <picture>
                        <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-3.webp 1x, ./../assets/img/food-desktop-3-@2x.webp 2x">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-3.webp 1x, ./../assets/img/food-tablet-3-@2x.webp 2x">
                        <source type="image/webp" srcset="./../assets/img/food-mobile-3.webp 1x, ./../assets/img/food-mobile-3-@2x.webp 2x">
                        <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-3.png 1x, ./../assets/img/food-desktop-3-@2x.png 2x"/>
                        <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-3.png 1x, ./../assets/img/food-tablet-3-@2x.png 2x"/>
                        <img
                            class="top-dishes__img"
                            src="./../assets/img/food-mobile-3.png"
                            srcset="./../assets/img/food-mobile-3-@2x.png 2x"
                            width="131"
                            height="136"
                            alt="Pig with vegetables"
                            loading="lazy"
                        />
                    </picture>
                    <div class="top-dishes__info">
                        <span class="top-dishes__stiker stiker stiker--red">Trending</span>
                        <a
                            class="top-dishes__name"
                            href="#"
                            target="_blank"
                        >
                            Swe Dish
                        </a>
                        <span class="top-dishes__group-text">
                            <span class="top-dishes__time">34min •</span>
                            <span class="top-dishes__rating">
                                <Icon iconName="star" iconWidth="14" iconHeight="14" />
                                <span class="top-dishes__rating-value">4.9</span>
                            </span>
                        </span>
                    </div>
                    <div class="top-dishes__buy">
                        <span class="top-dishes__price">
                            <span class="top-dishes__big-price text-bold">$19</span>
                            <span class="top-dishes__small-price">.99</span>
                        </span>
                        <button class="top-dishes__btn-plus" aria-label="add dish">
                            <Icon iconName="plus" iconWidth="10" iconHeight="10" />
                        </button>
                    </div>
                </li>
            </ul>
            <a
                class="top-dishes__full-link full-link"
                href="#"
                target="_blank"
            >
                <span class="top-dishes__text-link">View All</span>
                <Icon :iconName="'arrow-full-link'" iconWidth="16" iconHeight="16" />
            </a>
        </div>
    </section>
</template>