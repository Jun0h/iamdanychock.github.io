<script setup>
import { onMounted } from 'vue';
import {useWindowsStore} from '~/stores/windows'

const windowsStore = useWindowsStore()

const gridHeight = ref("")

const openWindow = (windowId) => {
    const payload = {
        windowState: "open",
        windowId: windowId
    }
    console.log(payload)
    windowsStore.setWindowState(payload)

    gtag('event', 'open_window', {
    event_category: 'Window',
    event_label: windowId,
    value: windowId
  })
}
  
const getImagePath = (iconImage) => {
    const path = `../assets/win95Icons/${iconImage}`;
    const modules = import.meta.glob("../assets/win95Icons/*", { eager: true });
    const mod = modules[path]
    console.log("ui");
    return mod.default;
};

onMounted(() => {
    let gridH = windowsStore.getFullscreenWindowHeight
    gridHeight.value = 10 + "px"
})

</script>



<template>
<div style="display: flex; align-items: center;">
    <img class="w-50 h-20" src="@/assets/win95Icons/UnityLogo.png" alt="Unity Logo" />
    <h1 style="margin-left: 10px;">Unity Projects</h1>
</div>

    <h3>All my Unity projects done in my second and third year at ISART!</h3>
    <p>Click on the icons to open the projects!</p>
      <nav class="grid-container1" :style="{ height: gridHeight }">
        <li v-for="window in windowsStore.windows" :key="window.key">
          <button
            class="icon"
            v-if="window.ShowInUnityGrid != false"
            @touchstart="openWindow(window.windowId)"
            @dblclick="openWindow(window.windowId)"
          >
            <img class="icon-image1" :src="getImagePath(window.iconImage)" :alt="window.altText" />
            <div class="border-box">
              <p class="icon-text">
                {{ window.displayName }}
              </p>
            </div>
          </button>
        </li>
      </nav>

    </template>

    
 
    <style>

.grid-container1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  padding: 10px;
}

.grid-item {
  background-color: #ccc;
  padding: 20px;
  text-align: center;
}

.icon-image1 {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.image-center {
    display: flex;
    justify-content: center; /* Centre l'image horizontalement */
    align-items: center; /* Centre l'image verticalement (si nécessaire) */
}


    </style>