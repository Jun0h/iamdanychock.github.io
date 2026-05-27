<script setup lang="ts">
import { ref } from 'vue'
import { VpEditor, useFreehand, useRectangle, downloadSvg, createSettings, type ImageHistory } from 'vue-paint'

// Add the tools you like to use, or call useAllTools to make use of all available tools
const tools = [useFreehand(), useRectangle()]

// The history can be manipulated programmatically, and used to persist the image
const history = ref<ImageHistory<typeof tools>>([])

// Settings are mainly changed through the toolbar, but you have full control over the settings, if you want to change active tool, color, thickness etc.
// Use the utility function createSettings to set it up, where you pass the tools you're using along with any start settings.
const settings = createSettings(tools)

// Paint 95 color palette
const colors = [
  '#000000', '#FFFFFF', '#FF0000', '#00FF00',
  '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
  '#808080', '#C0C0C0', '#800000', '#008000',
  '#000080', '#808000', '#800080', '#008080'
]

const changeColor = (color: string) => {
  // vue-paint uses 'color' property for stroke color
  settings.value.color = color
}
</script>


<template>
  <div class="paint-window">
    <div class="paint-toolbar">
      <div class="color-palette">
        <button 
          v-for="(color, index) in colors" 
          :key="index"
          class="color-button"
          :style="{ backgroundColor: color }"
          @click="changeColor(color)"
          :title="color"
        />
      </div>
      <button class="eraser-button" @click="changeColor('#FFFFFF')" title="Eraser">
        🧹
      </button>
    </div>
    <vp-editor
      v-model:history="history"
      v-model:settings="settings"
      :tools="tools"
      @save="downloadSvg"
    />
  </div>
</template>

<style scoped>
.size {
  width: 10%;
  height: 100%;
}

.paint-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #c0c0c0;
}

.paint-toolbar {
  background: #c0c0c0;
  padding: 4px;
  border-bottom: 2px solid;
  border-bottom-color: #dfdfdf;
  border-right: 2px solid #808080;
  border-bottom-color: #808080;
  display: flex;
  gap: 4px;
}

.color-palette {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
  padding: 4px;
  background: #c0c0c0;
  border: 2px inset #dfdfdf;
}

.color-button {
  width: 20px;
  height: 20px;
  border: 2px outset #dfdfdf;
  cursor: pointer;
  padding: 0;
  display: block;
  transition: border-color 0.1s;
}

.color-button:active {
  border-style: inset;
  border-color: #808080 #dfdfdf #dfdfdf #808080;
}

.color-button:hover {
  border-color: #000;
}

.eraser-button {
  width: 24px;
  height: 24px;
  border: 2px outset #dfdfdf;
  background: #c0c0c0;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.1s;
  margin-left: 4px;
}

.eraser-button:active {
  border-style: inset;
  border-color: #808080 #dfdfdf #dfdfdf #808080;
}

.eraser-button:hover {
  border-color: #000;
}

.paint-window :deep(.vp-image) {
  background: #fff;
}

.paint-window :deep(.vp-container) {
  flex: 1;
  overflow: hidden;
}

/* Hide vue-paint toolbar */
.paint-window :deep(.vp-toolbar) {
  display: none !important;
}

.paint-window :deep(.vp-top-bar) {
  display: none !important;
}

.paint-window :deep(.vp-settings-bar) {
  display: none !important;
}
</style>
    