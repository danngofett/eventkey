<template>
  <div class="preview-panel">
    <div>KeyboardEvent.key</div>

    <div>
      {{ code }}
    </div>

    <pre>
      function(event) {
        const { ctrlKey, shiftKey, code } = event

        if ({{ keyString }}) {
          ...expression
        }
      }
    </pre>

    <div>
      <base-button label="copy" to="#" />
      <base-button label="input" to="#" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useKeyDownCode } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    const { code, key, keyString, reset } = useKeyDownCode()

    return {
      code,
      key,
      keyString,
      reset
    }
  }
})
</script>