<script>
import Icon from './../components/Icon.vue';
export default {
  components: {
    Icon,
  },
  props: {
    logo: {
      type: String,
      required: false,
    },
    class: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    ratingNumber: {
        type: Number,
        required: false,
    },
    disabled: {
        type: Boolean,
        required: true
    }
  },
  mounted() {
    console.log('mounted');
    console.log('rating value', this.value);
  }
}
</script>

<template>
    <a class="rating" :class="this.class ? this.class : ''">
        <span v-if="this.logo" class="rating__logo">
            <Icon :iconName="this.logo" iconWidth="98" iconHeight="24" />
        </span>
        <span class="rating__value">
            <fieldset class="rating__group">
                <legend class="visually-hidden">Trustpilot rating rest</legend>
                <input
                    class="rating__star"
                    type="radio"
                    :name="this.name"
                    value="1"
                    :disabled="this.disabled"
                    aria-label="terrible"
                    :checked="this.value == '1'"
                />
                <input
                    class="rating__star"
                    type="radio"
                    :name="this.name"
                    value="2"
                    :disabled="this.disabled"
                    aria-label="passably"
                    :checked="this.value == '2'"
                />
                <input
                    class="rating__star"
                    type="radio"
                    :name="this.name"
                    value="3"
                    :disabled="this.disabled"
                    aria-label="normal"
                    :checked="this.value == '3'"
                />
                <input
                    class="rating__star"
                    type="radio"
                    :name="this.name"
                    value="4"
                    :disabled="this.disabled"
                    aria-label="good"
                    :checked="this.value == '4'"
                />
                <input
                    class="rating__star"
                    type="radio"
                    :name="this.name"
                    value="5"
                    aria-label="great"
                    :disabled="this.disabled"
                    :checked="this.value == '5'"
                />
            </fieldset>
        </span>
        <span v-if="this.ratingNumber" class="rating__number">
            {{this.ratingNumber}}+
        </span>
    </a>
</template>