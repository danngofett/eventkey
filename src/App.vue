<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <h1 class="h2">eventkey.io</h1>
      <base-button label="github" to="#" type="button" />
    </header>

    <main :class="$style.main">
      <div :class="$style.intro">
        <p class="h2">
          Press any combination of keys to get the JavaScript event key code
        </p>
      </div>

      <div :class="$style.view">
        <preview-panel />
      </div>

      <aside :class="$style.aside">
        <event-log />
      </aside>
    </main>

    <footer :class="$style.footer">
      <div :class="$style.footerDarkMode">
        <span class="meta">Dark mode</span>
      </div>

      <div :class="$style.footerDisclaimer">
        <p class="meta">This is an open source project, feel free to fork, share or send a PR for any edits.</p>
        <p class="meta">Made with Vue.js by <base-link label="Dan Ngo" to="#" />.</p>
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

<style>
@import './styles/normalize.css';
@import './styles/fonts.css';
@import './styles/base.css';
</style>

<style module>
.container {
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 var(--grid_gutter_l);
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--layout_s);
}

.main {
  display: grid;
  gap: var(--grid_gutter_l);
  grid-template-columns: var(--grid_columns_l);
  grid-column: -1 / 1;
  margin-bottom: auto;
}

.intro {
  grid-column: -1 / 1;
  margin-top: calc(var(--spacing_3xl) + 20px);
}

.footer {
  display: grid;
  gap: var(--grid_gutter_l);
  grid-template-columns: var(--grid_columns_l);
  margin-bottom: var(--spacing_xl);
}

.footerDarkMode {
  grid-column: -1 / 1;
  padding: var(--spacing_xl) 0;
}

.footerDisclaimer {
  grid-column: -1 / 1;
  padding: var(--spacing_xl) 0;
}

.footer {
  margin-top: auto;
  border-top: 1px solid var(--color_primary);
}

@media screen and (min-width: 1024px) {
  .intro {
    grid-column: 1 / 6;
  }

  .view {
    grid-column: 7 / 14;
  }

  .aside {
    grid-column: 15 / 19;
  }

  .footerDarkMode {
    grid-column: 1 / 15;
  }

  .footerDisclaimer {
    border-left: 1px solid var(--color_primary);
    grid-column: 15 / 19;
    padding-left: var(--spacing_xl);
  }
}
</style>