<script>
    import Select from './../components/Select.vue';
    import Icon from './../components/Icon.vue';
    export default {
        components: {
            Select,
            Icon
        }
    }
</script>

<template>
    <div class="purchases-group">
        <header class="purchases-group__header">
            <p class="purchases-group__title">Purchases</p>
            <Select class="purchases-group__btn-open" ariaLabel="purchases period select"/>
        </header>
        <ul class="purchases-group__list">
            <li class="purchases-group__item purchase">
                <div class="purchase__info">
                    <span class="purchase__icon">
                        <Icon iconName="wallet" iconWidth="16" iconHeight="16" />
                    </span>
                    <span class="purchase__text">
                        <span class="purchase__title">Expense</span>
                        <span class="purchase__percent">Increased By 10%</span>
                    </span>
                    <span class="purchase__price">$409.00</span>
                </div>
                <div
                    class="purchase__progress-bar progress-bar"
                    style="--progress-bar-val: 70%"
                ></div>
            </li>
            <li class="purchases-group__item purchase">
                <div class="purchase__info">
                    <span class="purchase__icon purchase__icon--green">
                        <Icon iconName="vocher" iconWidth="16" iconHeight="16" />
                    </span>
                    <span class="purchase__text">
                        <span class="purchase__title">Vocher Usage</span>
                        <span class="purchase__percent">Increased By 5%</span>
                    </span>
                    <span class="purchase__price">$45.78</span>
                </div>
                <div
                    class="purchase__progress-bar progress-bar progress-bar--orange"
                    style="--progress-bar-val: 50%"
                ></div>
            </li>
        </ul>
    </div>
</template>