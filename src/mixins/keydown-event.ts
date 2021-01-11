import { onMounted, ref, reactive, computed } from 'vue'

export const timelog = reactive({
  list: [
    reactive({
      input: ref(''),
      value: ref('')
    })
  ]
})

export function reset() {
  timelog.list = []
}

export function useKeyDownCode() {
  const code = ref('Key')
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
      value: convertTime(new Date().getTime())
    })
  }

  function convertTime(time: number) {
    let milliseconds = Math.floor((time % 1000) / 10)
    let seconds: (number | string) = Math.floor((time / 1000) % 60)
    let minutes: (number | string) = Math.floor((time / (1000 * 60)) % 60)
    let hours: (number | string) = Math.floor((time / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
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