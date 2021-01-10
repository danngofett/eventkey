<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <h1>keyboardkey.io</h1>
      <base-button label="github" to="#" />
    </header>

    <div :class="$style.intro">
      Press any key or enter in a value to get the JavaScript event key code
    </div>

    <main :class="$style.view">
      <preview-panel />
    </main>

    <aside :class="$style.aside">
      <event-log />
    </aside>

    <footer :class="$style.footer">
      <div>
        Dark mode
      </div>

      <div>
        <p>This is an open source project, feel free to fork, share or send a PR for any edits.</p>
        <p>Made by <base-link label="Dan Ngo" to="#" />.</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventLog from '@/components/EventLog.vue'
import PreviewPanel from '@/components/PreviewPanel.vue'

export default defineComponent({
  components: {
    EventLog,
    PreviewPanel
  }
})
</script>

<style module>
.container {
  display: grid;
  gap: var(--grid_gutter_l);
  grid-template-columns: var(--grid_columns_l);
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
}

.header {
  align-items: center;
  grid-column: -1 / 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
}

.intro {
  grid-column: -1 / 1;
}

.view {
  grid-column: -1 / 1;
}

.aside {
  grid-column: -1 / 1;
}

.footer {
  grid-column: -1 / 1;
  margin-top: auto;
}

@media screen and (min-width: 1024px) {
  .intro {
    grid-column: 1 / 6;
  }

  .view {
    grid-column: 6 / 13;
  }

  .aside {
    grid-column: 13 / 19;
  }
}
</style>