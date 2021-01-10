import { createApp } from 'vue'
import App from './App.vue'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import './styles/variables/colors.css'
import './styles/variables/grid.css'
import './styles/variables/spacing.css'
import './styles/variables/typography.css'

const app = createApp(App)

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName: string) => {
  if (fileName == undefined) {
    return
  }

  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .replace(/\.\w+$/, '')
        .split('-')
        .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
        .join('')
    )
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')
