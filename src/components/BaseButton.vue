<template>
  <div :class="$style['base-button']">
    <button
      :class="$style.button"
      v-if="element === 'button'"
    >
      {{ label }}
    </button>

    <a v-else :class="$style.button" :href="to">
      <span>{{ label }}</span>
    </a>
  </div>
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
    },
    element: {
      type: String,
      default: 'link'
    }
  }
}
</script>

<style module>
.base-button {
  display: inline-block;
}

.button {
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--color_primary);
  cursor: pointer;
  display: inline-block;
  min-width: 110px;
  padding: var(--spacing_s) var(--spacing_l);
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: var(--color_primary);
  color: var(--color_secondary);
}
</style>