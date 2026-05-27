<template>
    <div>
    
    <!-- Titre -->
         <img class="w-auto h-auto" src="@/assets\GameAssets\TheNameIWear\THENAMEIWEAR_LOGO.png">

    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
        <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Unreal%20Engine-%23313131.svg?logo=unrealengine&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="C#" src="https://img.shields.io/badge/-Blueprint-0000ff" />
        <img class="w-auto h-5 rounded-none text-xs" alt="WWISE" src="https://img.shields.io/badge/Wwise-00549F.svg?style=for-the-badge&logo=Wwise&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Jira" src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Jira" src="https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Jira" src="https://img.shields.io/badge/Perforce-404040?logo=perforce&logoColor=fff" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Jira" src="https://img.shields.io/badge/HLSL-0078d4?logo=visualstudio&logoColor=white" />



</h4>

    
        <h4 class="text-gray-600 font-medium text-xs">Done from May 2025 to June 2025</h4>

        <div class="pt-7">
           

            <!-- <div class="video-container">
      <video class="w-200 h-80" controls>
        <source src="@/assets\GameAssets\EchoGods\EchoGods_Trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
    </div> -->

        <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Trailer in progress</h4>
        </div>


            <p class="font-thin text-sm pb-2.5">
                Today, as every year, the festival of Imbolc takes place, during which the goddess Brigid is celebrated.
            </p>


            <p class="font-thin text-sm pb-2.5">
The player embodies this deity and travels through the Pictish lands of Scotland, accompanied by her lyre.            </p>
        <p class="font-thin text-sm pb-2.5">
Throughout her journey, she discovers a world in transition, where beliefs are evolving.
The arrival of Christianity disrupts the established balance, influencing both the world and the gameplay.
However, coexistence between these two cultures is possible, and the player will experience it firsthand.        </p>




        <p class="font-thin text-sm pb-2.5">
            This project wad developped in Unreal Engine 5, with a team of 5 Gameplay Programmers, 4 Game Programmers, 5 Game Designers, 9 Game Artists and 3 Sound Designers.
        </p>

                <div class="flex justify-center items-center">
         <img class="w-200 h-80" src="@/assets\GameAssets\EchoGods\Team pic.jpg">
        </div>

                <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Salmon Studio Team ! </h4>
        </div>



                <p class="font-thin text-sm pb-2.5">
            The development of this project was an absolute challenge, because the main focus was on how do we make the game understandable and playable for non musicians players, as all the game design is heavily focused on music ! 
        </p>



                        <p class="font-thin text-sm pb-2.5">
                        As for me, my main focus was on the sound integration, and developping most of the sound related mechanics, so a lot of puzzles mechanics to develop.   
                        </p>

                        <p class="font-thin text-sm pb-2.5">
                        As part of my work I integrated the sound assets using FMOD, using an occlusion system to assist some mechanics, that requires the player to explore. As well as animation and VFX integration keeping a coherent style and assist the player in understanding what they were doing and were they were going.
                        </p>

        </div>



        <div class="carousel">
  <button class="prev" @click="currentIndex = (currentIndex - 1 + images.length) % images.length">❮</button>
  <Transition name="fade" mode="out-in">
    <img
      :key="images[currentIndex]"
      :src="images[currentIndex]"
      alt="EchoGods Screenshot"
      class="carousel-image"
    />
  </Transition>
  <button class="next" @click="currentIndex = (currentIndex + 1) % images.length">❯</button>
</div>
    

    
      


    </div>
    </template>
    
    <style scoped>
    
    .video-container {
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  margin-top: 20px; /* Optionnel : ajoute un espace au-dessus */
}
    .image-container {
        display: flex;
        gap: 10px; /* espace entre les images */
    }
    .carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 32px auto;
  overflow: hidden; /* Cache les débordements */
}

.carousel-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  font-size: 18px;
}

button.prev,
button.next {
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  width: 56px;
  height: 56px;
  font-size: 2.2rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s, transform 0.2s;
  opacity: 0.85;
}
button.prev { left: 10px; }
button.next { right: 10px; }
button:hover {
  background: rgba(0,0,0,0.85);
  transform: translateY(-50%) scale(1.08);
  opacity: 1;
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
    </style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import img1 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_001.png";
import img2 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_002.png";
import img3 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_003.png";
import img4 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_004.png";
import img5 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_005.png";  
import img6 from "@/assets/GameAssets/TheNameIWear/Screens/IMAGES_PASSWORLD_006.png";

const images = ref([
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
]);

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

let intervalId = null;
onMounted(() => {
  intervalId = setInterval(nextImage, 7000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
