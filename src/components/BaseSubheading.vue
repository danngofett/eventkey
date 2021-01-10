<template>
  <div :class="$style['base-subheading']">
    <h2 :class="$style.subheading">
      {{ heading }}
    </h2>

    <base-button
      :class="$style.action"
      :label="actionLabel"
      @click="$emit('on-action')"
      element="button"
      type="link"
      v-if="actionLabel && !hideLabel"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    action: {
      type: Function,
      default: () => {}
    },
    actionLabel: {
      type: String,
      default: ''
    },
    heading: {
      type: String,
      default: ''
    },
    hideLabel: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    return {
      props
    }
  }
})
</script>

<style module>
.base-subheading {
  display: flex;
  border-bottom: 1px solid var(--color_primary);
  justify-content: space-between;
  margin-bottom: var(--spacing_l);
  padding-bottom: var(--spacing_s);
}

.subheading {
  font-size: 18px;
  font-weight: var(--weight_book);
  line-height: 1.1;
  margin: 0;
}

.action {
  cursor: pointer;
}
</style>