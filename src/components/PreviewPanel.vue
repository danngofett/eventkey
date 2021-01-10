<template>
  <div class="preview-panel">
    <base-subheading
      heading="KeyboardEvent.key"
    />

    <div :class="$style.previewCode">
      {{ code }}
    </div>

    <base-subheading
      heading="Event handler example"
      :action-label="copying ? 'copied!' : 'copy'"
      @onAction="copyCodeSnippet"
    />

    <textarea
      :class="$style.textarea"
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

<style module>
.previewCode {
  font-size: 148px;
  margin-bottom: var(--layout_s);
  word-wrap: anywhere;
}

.textarea {
  background-color: transparent;
  color: currentColor;
  min-height: 200px;
  margin-bottom: var(--spacing_l);
  width: 100%;
}
</style>