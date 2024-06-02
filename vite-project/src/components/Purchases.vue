<script>
    import PurshasesData from './PurshasesData.vue';
    export default {
        components: {
            PurshasesData,
        }
    }
</script>

<template>
    <section class="control">
        <div class="control__wrapper container">
            <div class="control__wrapper-info">
                <h2 class="control__title text-title">
                    <span class="text-bold">
                        Control <span class="text-violet">Purchases</span> Via&nbsp;Dashboard
                    </span>
                </h2>
                <ul class="control__list">
                    <li class="control__item">
                        <a
                            class="control__link"
                            href="#"
                            target="_blank"
                        >
                            <picture>
                                <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-6.webp 1x, ./../assets/img/food-desktop-6-@2x.webp 2x">
                                <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-6.webp 1x, ./../assets/img/food-tablet-6-@2x.webp 2x">
                                <source type="image/webp" srcset="./../assets/img/food-mobile-6.webp 1x, ./../assets/img/food-mobile-6-@2x.webp 2x">
                                <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-6.png 1x, ./../assets/img/food-desktop-6-@2x.png 2x"/>
                                <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-6.png 1x, ./../assets/img/food-tablet-6-@2x.png 2x"/>
                                <img
                                    class="control__img"
                                    src="./../assets/img/food-mobile-6.png"
                                    srcset="./../assets/img/food-mobile-6-@2x.png 2x"
                                    width="51"
                                    height="52"
                                    alt="Chicken with vegetables"
                                    loading="lazy"
                                />
                            </picture>
                            <span class="control__info">
                                <span class="control__name">Chicken Hell</span>
                                <span class="control__status">On The Way</span>
                            </span>
                            <span class="control__time">3:09 PM</span>
                        </a>
                    </li>
                    <li class="control__item">
                        <a
                            class="control__link"
                            href="#"
                            target="_blank"
                        >
                            <picture>
                                <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-7.webp 1x, ./../assets/img/food-desktop-7-@2x.webp 2x">
                                <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-7.webp 1x, ./../assets/img/food-tablet-7-@2x.webp 2x">
                                <source type="image/webp" srcset="./../assets/img/food-mobile-7.webp 1x, ./../assets/img/food-mobile-7-@2x.webp 2x">
                                <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-7.png 1x, ./../assets/img/food-desktop-7-@2x.png 2x"/>
                                <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-7.png 1x, ./../assets/img/food-tablet-7-@2x.png 2x"/>
                                <img
                                    class="control__img"
                                    src="./../assets/img/food-mobile-7.png"
                                    srcset="./../assets/img/food-mobile-7-@2x.png 2x"
                                    width="51"
                                    height="52"
                                    alt="Pig with vegetables"
                                    loading="lazy"
                                />
                            </picture>
                            <span class="control__info">
                                <span class="control__name">Swe Dish</span>
                                <span class="control__status">Delivered</span>
                            </span>
                            <span class="control__time">Yesterday</span>
                        </a>
                    </li>
                    <li class="control__item">
                        <a
                            class="control__link"
                            href="#"
                            target="_blank"
                        >
                            <picture>
                                <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-7.webp 1x, ./../assets/img/food-desktop-7-@2x.webp 2x">
                                <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-7.webp 1x, ./../assets/img/food-tablet-7-@2x.webp 2x">
                                <source type="image/webp" srcset="./../assets/img/food-mobile-7.webp 1x, ./../assets/img/food-mobile-7-@2x.webp 2x">
                                <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-7.png 1x, ./../assets/img/food-desktop-7-@2x.png 2x"/>
                                <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-7.png 1x, ./../assets/img/food-tablet-7-@2x.png 2x"/>
                                <img
                                    class="control__img"
                                    src="./../assets/img/food-mobile-9.png"
                                    srcset="./../assets/img/food-mobile-9-@2x.png 2x"
                                    width="51"
                                    height="52"
                                    alt="Fish with vegetables"
                                    loading="lazy"
                                />
                            </picture>
                            <span class="control__info">
                                <span class="control__name">Fish Hell Veg</span>
                                <span class="control__status control__status--cancel">Cancelled</span>
                            </span>
                            <span class="control__time">Yesterday</span>
                        </a>
                    </li>
                </ul>
            </div>
            <PurshasesData />
        </div>
    </section>
</template>