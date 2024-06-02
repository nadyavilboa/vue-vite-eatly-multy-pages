<script>
export default {
    props: {
        amountCustomers: {
            type: String,
            required: true,
        },
        amountDishes: {
            type: String,
            required: true,
        },
        levelSupport: {
            type: String,
            required: true,
        }
    }
}
</script>
<template>
    <section class="about-us">
        <div class="about-us__wrapper container">
            <h2 class="about-us__title visually-hidden">
                Numerical data about the company
            </h2>
            <ul class="about-us__list">
                <li class="about-us__item">
                    <p class="about-us__number">
                        {{ this.amountCustomers }}
                    </p>
                    <p class="about-us__text">
                        <span class="about-us__text-item">Satisfied Costumers</span>
                        <span class="about-us__text-item">All Great Over The World </span>
                    </p>
                </li>
                <li class="about-us__item">
                    <p class="about-us__number">
                        {{ this.amountDishes }}
                    </p>
                    <p class="about-us__text">
                        <span class="about-us__text-item">Healthy Dishes Sold</span>
                        <span class="about-us__text-item">Including Milk Shakes Smooth</span>
                    </p>
                </li>
                <li class="about-us__item">
                    <p class="about-us__number">
                        {{ this.levelSupport }}
                    </p>
                    <p class="about-us__text">
                        <span class="about-us__text-item">Reliable Customer Support</span>
                        <span class="about-us__text-item">We Provide Great Experiences</span>
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>