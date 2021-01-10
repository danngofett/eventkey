<template>
  <div>
    <div>
      History
    </div>

    <div>
      <ul>
        <li
          v-for="(item, index) in timelog.list"
          :key="index"
        >
          {{ item.input }} / {{ item.value }}
        </li>
      </ul>

      <base-button @click="reset" label="Reset" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { timelog } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    return {
      timelog
    }
  }
})
</script>