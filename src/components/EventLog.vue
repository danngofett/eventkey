<template>
  <div>
    <div>
      History
    </div>

    <div>
      <ul>
        <li
          v-for="(item, index) in eventLog"
          :key="index"
        >
          {{ item.input }} / {{ item.value }}
        </li>
      </ul>

      <base-button
        v-if="eventLog.length"
        @click="reset"
        label="Reset"
        type="button"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { timelog, reset } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    const eventLog = computed(() => {
      return timelog.list.filter(((item) => item.input))
    })

    return {
      reset,
      eventLog
    }
  }
})
</script>