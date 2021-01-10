<template>
  <div :class="$style['base-button']">
    <button
      :class="type === 'link' ? $style.link : $style.button"
      v-if="element === 'button'"
    >
      {{ label }}
    </button>

    <a v-else :class="$style.button" :href="to" target="_blank">
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
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style module>
.base-button {
  display: inline-flex;
}

.button {
  appearance: none;
  background-color: transparent;
  border: 1px solid currentColor;
  color: currentColor;
  cursor: pointer;
  display: inline-block;
  min-width: 110px;
  padding: var(--spacing_s) var(--spacing_l);
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: currentColor;
  color: var(--color_secondary);
}

.link {
  appearance: none;
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  padding: 0;
}

.link:hover {
  text-decoration: underline;
}
</style>