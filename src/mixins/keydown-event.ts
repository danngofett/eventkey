import { onMounted, ref, reactive, computed } from 'vue'

export const timelog = reactive({
  list: [
    reactive({})
  ]
})

export function reset() {
  timelog.list = []
}

export function useKeyDownCode() {
  const code = ref('')
  const type = ref('')
  const key = ref('')

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

    return `code === '${code.value}'`
  })

  const keyInputs = (() => {
    if (isCtrlKey.value && isShiftKey.value && code) {
      return `Ctrl + Shift + ${code.value}`
    }

    if (isCtrlKey.value && code) {
      return `Ctrl + ${code.value}`
    }

    if (isShiftKey.value && code) {
      return `${code.value}`
    }

    return code.value
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

    timelog.list.push({
      input: keyInputs(),
      value: event.timeStamp
    })
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
    timelog,
    reset
  }
}