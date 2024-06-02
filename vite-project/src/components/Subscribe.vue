<script>
    import Input from './../components/Input.vue';
    export default {
        components: {
            Input
        }
    }
</script>

<template>
    <div class="subscribe">
        <div class="subscribe__wrapper">
            <div class="subscribe__title">Get 50%</div>
            <form class="subscribe__input-wrapper" action="#">
                <Input class="subscribe__input" type="email" placeholder="Email Address" />
                <button class="subscribe__btn btn btn-violet" type="submit">Subscribe</button>
            </form>
        </div>
        <picture>
            <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-10.webp 1x, ./../assets/img/food-desktop-10-@2x.webp 2x">
            <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-10.webp 1x, ./../assets/img/food-tablet-10-@2x.webp 2x">
            <source type="image/webp" srcset="./../assets/img/food-mobile-10.webp 1x, ./../assets/img/food-mobile-10-@2x.webp 2x">
            <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-10.png 1x, ./../assets/img/food-desktop-10-@2x.png 2x"/>
            <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-10.png 1x, ./../assets/img/food-tablet-10-@2x.png 2x"/>
            <img
                class="subscribe__img"
                src="./../assets/img/food-mobile-10.png"
                srcset="./../assets/img/food-mobile-10-@2x.png 2x"
                width="169"
                height="170"
                alt="Chicken with vegetables"
                loading="lazy"
            />
        </picture>
    </div>
</template>