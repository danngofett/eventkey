<template>
  <a :href="to" class="base-link">
    {{ label }}
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