<script>
    export default {
        props: {
            class: {
                type: String,
                required: false,
            },
            type: {
                type: String,
                required: false,
            },
            placeholder: {
                type: String,
                required: false,
            }
        }
    }
</script>

<template>
    <input
        :class="this.class ? 'subscribe__input' : ''"
        :type="this.type ? this.type : 'text'"
        value=""
        :placeholder="this.placeholder ? this.placeholder : ''"
    />
</template>