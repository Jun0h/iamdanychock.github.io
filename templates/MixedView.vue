<script setup>
import { ref, onMounted } from 'vue';
import { useWindowsStore } from '@/stores/windows';

const windowsStore = useWindowsStore();

const gridHeight = ref("");

const openWindow = (windowId) => {
    const payload = {
        windowState: "open",
        windowId: windowId
    };
    windowsStore.setWindowState(payload);
};

const getImagePath = (iconImage) => {
    const path = `../assets/win95Icons/${iconImage}`;
    const modules = import.meta.glob("../assets/win95Icons/*", { eager: true });
    const mod = modules[path];
    return mod.default;
};

onMounted(() => {
    let gridH = windowsStore.getFullscreenWindowHeight;
    gridHeight.value = gridH.substring(0, gridH.length - 2) - 60 + "px";
});
</script>

<template>
  <div>
    <nav class="grid-container" :style="{ height: gridHeight }">
      <li v-for="window in windowsStore.windows" :key="window.key">
        <button
          class="icon"
          v-if="window.showInAppGrid != false"
          @touchstart="openWindow(window.windowId)"
          @dblclick="openWindow(window.windowId)"
        >
          <img class="icon-image" :src="getImagePath(window.iconImage)" :alt="window.altText" />
          <div class="border-box">
            <p class="icon-text">
              {{ window.displayName }}
            </p>
          </div>
        </button>
      </li>
    </nav>
    <!-- Add window template elements here -->
    <div class="window-template">
      <!-- Example window content -->
      <div v-for="window in windowsStore.windows" :key="window.key" v-if="window.windowState === 'open'">
        <h1>{{ window.displayName }}</h1>
        <p>Content for {{ window.displayName }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
.grid-container {
  display: flex;
  flex-wrap: wrap;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-image {
  width: 32px;
  height: 32px;
}

.border-box {
  border: 1px solid #000;
  padding: 5px;
}

.icon-text {
  text-align: center;
}

.window-template {
  margin-top: 20px;
}
</style>