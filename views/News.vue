<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import img1 from "@/assets/GameAssets/EchoGods/Miniature.png";
import img2 from "@/assets/WorkAssets/Fleur/Fleur.gif";
import img3 from "@/assets/GameAssets/Vampy/BG_itch.png";
import img4 from "@/assets/GameAssets/TheNameIWear/NameIWear.png";



const windowsStore = useWindowsStore()

const images = ref([
    { src: img4, windowId: "TheNameIWear" },
  { src: img1, windowId: "EchoGods" },
  { src: img2, windowId: "Fleur" },
  { src: img3, windowId: "Vampy" }
]);

const currentIndex = ref(0);


const openWindow = (windowId) => {
  const payload = {
    windowState: "open",
    windowId: windowId
  }
  windowsStore.setWindowState(payload)

  gtag('event', 'open_window', {
    event_category: 'Window',
    event_label: windowId,
    value: windowId
  })

}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Défilement automatique toutes les 10 secondes
let intervalId = null;
onMounted(() => {
  intervalId = setInterval(nextImage, 7000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
<div>
    <h2 class="font-bold text-2xl py-5">What's New ?</h2>
    <h3 class="text-gray-600 font-medium text-sm pb-2.5">
      Check out my latest projects !</h3>

    <div class="carousel">
    <button class="prev" @click="prevImage">❮</button>
    <Transition name="fade" mode="out-in">
      <img
        :key="images[currentIndex].src"
        :src="images[currentIndex].src"
        alt="Carousel Image"
        class="carousel-image"
        @click="openWindow(images[currentIndex].windowId)"
        style="cursor:pointer"
      />
    </Transition>
    <button class="next" @click="nextImage">❯</button>
  </div>

</div>  
 <div class="flex justify-center">
    <h2 class="font-bold text-2xl py-5">Quick Start</h2>
</div>
 <div class="flex justify-center">


 <div class="vertical-btn-container">
  <button
    class="large-btn"
    @click="openWindow('WorkContainer')"
  >
    <img src="@/assets/win95Icons/briefcase.png" alt="Work" style="width: 24px; height: 24px;" />
    <span style="margin-left: 12px;">Work Experience</span>
  </button>
  <button
    class="large-btn"
    @click="openWindow('UnityContainer')"
  >
    <img src="@/assets/win95Icons/UnityLogo.png" alt="Unity" style="width: 24px; height: 24px;" />
    <span style="margin-left: 12px;">Unity Projects</span>
  </button>

    <button
    class="large-btn"
    @click="openWindow('UnrealContainer')"
  >
    <img src="@/assets/win95Icons/UnrealLogo.png" alt="Unreal" style="width: 24px; height: 24px;" />
    <span style="margin-left: 12px;">Unreal Projects</span>
  </button>

      <button
    class="large-btn"
    @click="openWindow('ResumeWindow')"
  >
    <img src="@/assets/win95Icons/resume.png" alt="Unreal" style="width: 24px; height: 24px;" />
    <span style="margin-left: 12px;">Resumé</span>
  </button>

  <button
    class="large-btn"
    @click="openWindow('MailWindow')"
  >
    <img src="@/assets/win95Icons/mail.png" alt="Unreal" style="width: 24px; height: 24px;" />
    <span style="margin-left: 12px;">Contact Me ! </span>
  </button>

</div>
  

</div>
</template>

<style scoped>

.size {
  width: 100%;
  height: 100%;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 100;
  margin:  auto;
  overflow: show;
}

.carousel-image {
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}

.large-btn {
  background-color: transparent;
  color: #000000;
  border: 2px solid #000000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.large-btn:hover {
  background-color: #000000;
  color: white;
  border-color: #000000;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.vertical-btn-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 0.2rem;
}

</style>
