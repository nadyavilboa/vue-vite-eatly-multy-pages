<script>
    import Icon from './../components/Icon.vue';
    export default {
        components: {
            Icon,
        },
        props: {
            class: {
                type: String,
                required: false,
            },
            ariaLabel: {
                type: String,
                required: false,
            }
        }
    }
</script>

<template>
    <div class="select" :class="this.class ? this.class : ''" :aria-label="this.ariaLabel ? this.ariaLabel : ''">
        <div class="select__header">
            <span class="select__active-val">This month</span>
            <Icon iconName="arrow-smart" iconWidth="16" iconHeight="16" />
        </div>
        <div class="select__list">
            <span class="select__value">This month</span>
            <span class="select__value">This week</span>
            <span class="select__value">This day</span>
        </div>
    </div>
</template>