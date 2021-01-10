import { onMounted, ref, computed } from 'vue'

export function useKeyDownCode() {
  const code = ref('')
  const type = ref('')
  const key = ref('')
  const timestamp = ref(0)

  const isShiftKey = ref(false)
  const isCtrlKey = ref(false)

  const keyString = computed(() => {
    if (isCtrlKey.value && isShiftKey.value && code) {
      return `ctrlKey && shiftKey && code === '${code.value}'`
    }

    if (isCtrlKey.value && code) {
      return `isCtrlKey && code === '${code.value}'`
    }

    if (isShiftKey.value && code) {
      return `shiftKey && code === '${code.value}'`
    }

    if (code) {
      return `code === '${code.value}'`
    }
  })

  function update(event: KeyboardEvent) {
    event.preventDefault()

    if (event.repeat) {
      return
    }

    code.value = event.code
    key.value = event.key
    type.value = event.type
    isCtrlKey.value = event.ctrlKey
    isShiftKey.value = event.shiftKey
    timestamp.value = event.timeStamp
  }

  onMounted(() => {
    window.addEventListener('keydown', update)
  })

  return {
    code,
    key,
    type,
    isCtrlKey,
    isShiftKey,
    keyString,
    timestamp
  }
}