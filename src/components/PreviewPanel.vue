<template>
  <div class="preview-panel">
    <div>KeyboardEvent.key</div>

    <div>
      {{ code }}
    </div>

    <textarea
      ref="codePreview"
      :value="`
        function(event) {
          const { ctrlKey, shiftKey, code } = event

          if (${keyString}) {
            ...expression
          }
        }
      `"
      readonly
    />

    <div>
      <base-button
        :label="copying ? 'copied!' : 'copy'"
        :is-disabled="copying"
        type="button"
        @click="copyCodeSnippet"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useKeyDownCode } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    const { code, key, keyString } = useKeyDownCode()
    const copying = ref(false)
    const codePreview = ref(null)

    function copyCodeSnippet() {
      codePreview.value.select()
      document.execCommand('copy')

      copying.value = true

      setTimeout(() => {
        copying.value = false
      }, 1000);
    }

    return {
      code,
      codePreview,
      copyCodeSnippet,
      copying,
      key,
      keyString
    }
  }
})
</script>