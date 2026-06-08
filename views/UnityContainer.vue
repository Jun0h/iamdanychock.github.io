<script setup>
import { computed } from 'vue';
import {useWindowsStore} from '~/stores/windows'

const windowsStore = useWindowsStore()

const unityWindows = computed(() =>
  windowsStore.windows.filter((window) => window.ShowInUnityGrid !== false)
)

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

</script>



<template>
<div style="display: flex; align-items: center;">
    <img class="w-50 h-20" src="@/assets/win95Icons/UnityLogo.png" alt="Unity Logo" />
    <h1 style="margin-left: 10px;">Unity Projects</h1>
</div>

    <h3>All my Unity projects done in my second and third year at ISART!</h3>
    <p>Click on the icons to open the projects!</p>
      <nav class="grid-container1">
        <li class="grid-item1" v-for="window in unityWindows" :key="window.key">
          <button
            class="icon"
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

    
 
    <style scoped>

.grid-container1 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px 14px;
  padding: 10px;
}

.grid-item1 {
  list-style: none;
  display: flex;
  justify-content: center;
}

.icon-text {
  color: #000000 ;
}

.icon-image1 {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.icon {
  width: 100%;
  margin: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.image-center {
    display: flex;
    justify-content: center; /* Centre l'image horizontalement */
    align-items: center; /* Centre l'image verticalement (si nécessaire) */
}


    </style>