<template>
  <div class="preview-panel">
    <base-subheading
      heading="KeyboardEvent.key"
    />

    <div :class="$style.previewCode">
      <span v-if="modifiers" class="h6" :class="$style.previewBadge">
        {{ modifiers }}
      </span>

      <span ref="preview" :class="$style.preview">
        {{ code }}
      </span>
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
import { defineComponent, ref, onMounted, computed } from 'vue'
import fitty from 'fitty'
import { useKeyDownCode } from '@/mixins/keydown-event'

export default defineComponent({
  setup() {
    const {
      code,
      key,
      isCtrlKey,
      isShiftKey,
      modifiers,
      keyString
    } = useKeyDownCode()
    const copying = ref(false)
    const codePreview = ref(null)
    const preview = ref(null)


    function copyCodeSnippet() {
      codePreview.value.select()
      document.execCommand('copy')

      copying.value = true

      setTimeout(() => {
        copying.value = false
      }, 1000);
    }

    onMounted(() => {
      fitty(preview.value, {
        minSize: 72,
        maxSize: 300
      })
    })

    return {
      code,
      codePreview,
      copyCodeSnippet,
      copying,
      isCtrlKey,
      isShiftKey,
      key,
      keyString,
      modifiers,
      preview
    }
  }
})
</script>

<style module>
.previewCode {
  margin-bottom: var(--layout_s);
  word-wrap: anywhere;
}

.preview {
  position: relative;
  left: -7px;
}

.previewBadge {
  display: block;
  margin: var(--spacing_xs) 0;
}

.textarea {
  background-color: transparent;
  color: currentColor;
  min-height: 200px;
  margin-bottom: var(--spacing_l);
  width: 100%;
}
</style>