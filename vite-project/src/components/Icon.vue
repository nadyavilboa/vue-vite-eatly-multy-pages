<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconClass: {
        type: String,
        required: false,
    },
    iconWidth: {
        type: String,
        required: false,
    },
    iconHeight: {
        type: String,
        required: false,
    }
  }
};
</script>

<template>
    <svg 
        :class="iconClass ? iconClass : ''"
        :width="iconWidth ? iconWidth : ''"
        :height="iconHeight ? iconHeight : ''"
    >
      <use :xlink:href="`./sprite.svg#${iconName}`"></use>
    </svg>
  </template>
  
