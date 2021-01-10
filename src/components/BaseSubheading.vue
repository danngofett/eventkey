<template>
  <div :class="$style['base-subheading']">
    <h2 :class="$style.subheading">
      {{ heading }}
    </h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    heading: {
      type: String,
      default: ''
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
  border-bottom: 1px solid var(--color_primary);
  margin-bottom: var(--spacing_l);
  padding-bottom: var(--spacing_s);
}

.subheading {
  font-size: 18px;
  font-weight: var(--weight_book);
  line-height: 1.1;
  margin: 0;
}
</style>