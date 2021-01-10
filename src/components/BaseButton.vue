<template>
  <a :class="$style.button" :href="to">
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style module>
.button {
  border: 1px solid var(--color_primary);
  display: inline-block;
  padding: var(--spacing_m) var(--spacing_l);
}
</style>