<template>
  <div>
    <base-subheading
      heading="History"
    />

    <div :class="$style.panel">
      <ul :class="$style.list">
        <li
          v-for="(item, index) in eventLog"
          :key="index"
          :class="$style['list-item']"
        >
          <span class="h6">{{ item.input }}</span>
          <span class="meta">{{ item.value }}</span>
        </li>
      </ul>

      <base-button
        v-if="eventLog.length"
        @click="reset"
        label="Reset"
        element="button"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { timelog, reset } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    const eventLog = computed(() => {
      return timelog.list.filter(((item) => item.input)).reverse()
    })

    return {
      reset,
      eventLog
    }
  }
})
</script>

<style module>
.list {
  margin: 0 0 var(--spacing_l);
  padding: 0;
  list-style-type: none;
  overflow: auto;
  max-height: 600px;
}

.list-item {
  display: flex;
  justify-content: space-between;
}

.list-item + .list-item {
  margin-top: var(--spacing_l);
}
</style>