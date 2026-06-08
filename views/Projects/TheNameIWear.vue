<template>
    <div>
    
    <!-- Titre -->
         <img class="w-100 h-50" src="@/assets\GameAssets\TheNameIWear\THENAMEIWEAR_LOGO.png">

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
           

            <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bF5x32yIQSA?si=nKYbFAVsSPpwJuDt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      
    </div> 

        <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Trailer</h4>
        </div>


            <p class="font-thin text-sm pb-2.5">
            Play as a spy in a first-person narrative puzzle game. Writing a name allows you to take on that identity. Explore a riad, gather clues, and uncover the truth. With no pen at your disposal, creatively and unexpectedly use the environment to form names and change identities.            </p>




        <p class="font-thin text-sm pb-2.5">
            This project wad developped in Unreal Engine 5, with a team of 3 Gameplay Programmers, 3 Game Programmers, 5 Game Designers, 7 Game Artists, 1 Sound Designer and 1 Producer.
        </p>

                <div class="flex justify-center items-center">
         <img class="w-200 h-80" src="@/assets\GameAssets\TheNameIWear\TeamPic.jpg">
        </div>

                <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Passworld Team ! </h4>
        </div>



                <p class="font-thin text-sm pb-2.5">
            A whole college year was dedicated to the development of this project, and I had the chance to work on a lot of different aspects of the game, from the puzzle design, integrations tools and some tech art!

                </p>



                

        </div>



        <section class="gameplay-section">
  <div class="section-heading">
    <h3>Gameplay</h3>
    <p>The Phone</p>
  </div>

  <div class="gif-compare">
    <div class="gif-card">
      <img :src="phoneGif" alt="Telephone gameplay gif 1" class="compare-gif" />
      <p class="gif-caption">Prototype</p>
    </div>

    <div class="gif-card">
      <img :src="telephoneGif" alt="Telephone gameplay gif 2" class="compare-gif" />
      <p class="gif-caption">Final Version</p>
    </div>

  </div>

  <p class="font-thin text-sm pb-2.5">
    The phone is one of our devices that we use to input a name, this feature was a huge talent in game feel since we wanted to give challenge to the player and find a creative way to input the name. 
    This device went through multiples iterations, first trying determining if we wanted to keep the circular motion with the mouse since not everyone knows how to use an old phone. After multiples playtests, we decided to keep the circular motion but add a visual feedback with outlines and highlights to help the player understand how to use it.
  </p>


   <div class="section-heading">
    <p>The Radio</p>
  </div>

  <div class="gif-compare">
    <div class="gif-card">
      <img :src="Radio1" alt="Telephone gameplay gif 1" class="compare-gif" />
      <p class="gif-caption">Prototype</p>
    </div>

    <div class="gif-card">
      <img :src="RadioDef" alt="Telephone gameplay gif 2" class="compare-gif" />
      <p class="gif-caption">Final Version</p>
    </div>

  </div>

  <p class="font-thin text-sm pb-2.5">
   On the early stages of the production, the radio was lacked of feedbacks, the main point of the radio was to be able to input the name by matching the frequences of the letters only by using sound. 
   This wasn't really clear for the player as I came up with the oscilloscope idea which make it way more clear and fun to use, the player can now see the waveforms of the frequencies and try to match them to input the desired letter. 
   This was a huge improvement in terms of game feel and feedbacks, and it was really fun to see how the players were able to use it after a few tries. On the manipulation side, the knob was really hard to understand, we wanted to offer different ways for the player to use it like an invisible slider, 
   directly turning the knob or just by using the mouse wheel by the end we just decided to adapt the model and having visual sliders to make it more intuitive and easier to use.
  </p>
</section>

<!-- Other prototypes (simple list/gallery) -->
<section class="gameplay-section">
  <div class="section-heading">
    <p>Other prototypes</p>
  </div>

  <div class="proto-gallery">
        <div class="proto-card">
      <img :src="Zone" alt="Effect Zone" class="proto-img" />
      <p class="proto-caption">Effect Zone</p>
      <p class="proto-desc">First iteration of the effect zone with black and white delimitations</p>
    </div>

    <div class="proto-card">
      <img :src="changingText" alt="Changing Text" class="proto-img" />
      <p class="proto-caption">Changing Text</p>
      <p class="proto-desc">First iteration of the 'translatable text' feature</p>
    </div>

    <div class="proto-card">
      <img :src="ditherGif" alt="Dither" class="proto-img" />
      <p class="proto-caption">Dither effect</p>
      <p class="proto-desc">Dither effect inspired in Return of the Obra Dinn to have different experiments with artistic directions</p>
    </div>

    <div class="proto-card">
      <img :src="vertextGif" alt="Vertex deformation" class="proto-img" />
      <p class="proto-caption">Vertex Deformation</p>
      <p class="proto-desc">Experimentation with vertex deformation for visual feedback</p>
    </div>
  </div>


  
</section>

<section class="gameplay-section">
  <div class="section-heading">
    <h3>Tools</h3>
    <p>Parallel Dimension Tool!</p>
  </div>

    <div class="video-container">
      <video class="w-200 h-80" controls>
        <source src="@/assets\GameAssets\TheNameIWear\tool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>


  </section>


  <p class="font-thin text-sm pb-2.5">
    During the production, the idea of a parallel dimension mechanic came up, it was only to show a different version of the riad, more abandonned. The integration seemed like hell for Game Artists and Level Designers,
    I quickly came with a solution, I created a tool that allowed to easily duplicate the level and have a quick way to switch between the two versions of the level, this tool was really easy to use and allowed the artists to quickly iterate on the level design and art of the parallel dimension without having to worry about the technical side of things. On the optimisation side, it was handled by Unreal's level streaming system, we had to make sure that the two versions of the level were not loaded at the same time to avoid performance issues, and this tool allowed us to easily manage that by just having one version of the level loaded at a time. 
  </p>

        <div class="carousel">
  <button class="prev" @click="currentIndex = (currentIndex - 1 + images.length) % images.length">❮</button>
  <Transition name="fade" mode="out-in">
    <img
      :key="images[currentIndex]"
      :src="images[currentIndex]"
      alt="The Screenshot"
      class="carousel-image"
    />
  </Transition>
  <button class="next" @click="currentIndex = (currentIndex + 1) % images.length">❯</button>
</div>
    

    
      


    </div>
     <div class="video-container">
    <iframe src="https://store.steampowered.com/widget/4196120/" frameborder="0" width="646" height="190"></iframe>
    </div>
    </template>
    
    <style scoped>
    
    .video-container {
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  margin-top: 20px; /* Optionnel : ajoute un espace au-dessus */
}

    .gameplay-section {
      margin-top: 28px;
    }

    .section-heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      margin-bottom: 18px;
    }

    .section-heading h3 {
      margin: 0;
      font-size: 3rem;
      font-weight: 600;
      color: #374151;
    }

    .section-heading p {
      margin: 0;
      font-size: 2rem;
      color: #6b7280;
    }

    .gif-compare {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      align-items: start;
    }

    .gif-card {
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: center;
      align-items: center;
    }

    .compare-gif {
      width: 100%;
      max-width: 420px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    }

    .gif-caption {
      margin: 0;
      font-size: 0.8rem;
      font-weight: 600;
      color: #4b5563;
      text-align: center;
    }

    @media (max-width: 768px) {
      .gif-compare {
        grid-template-columns: 1fr;
      }
    }
    .proto-gallery {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 12px;
      align-items: start;
    }

    .proto-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .proto-img {
      width: 100%;
      max-width: 260px;
      border-radius: 8px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }

    .proto-caption {
      margin: 0;
      font-size: 0.85rem;
      color: #374151;
      text-align: center;
      font-weight: 600;
    }

    .proto-desc {
      margin: 0;
      font-size: 0.8rem;
      color: #6b7280;
      text-align: center;
      max-width: 260px;
    }

    @media (max-width: 900px) {
      .proto-gallery { grid-template-columns: repeat(2, 1fr); }
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
import phoneGif from "@/assets/GameAssets/TheNameIWear/PhoneV1.gif";
import telephoneGif from "@/assets/GameAssets/TheNameIWear/PhoneVDEF.gif";
import Radio1 from "@/assets/GameAssets/TheNameIWear/RadioV1.gif";
import RadioDef from "@/assets/GameAssets/TheNameIWear/RadioVDEF.gif";
import Zone from "@/assets/GameAssets/TheNameIWear/Zone.gif";
import changingText from "@/assets/GameAssets/TheNameIWear/ChangingText.gif";
import ditherGif from "@/assets/GameAssets/TheNameIWear/Dither.gif";
import vertextGif from "@/assets/GameAssets/TheNameIWear/Vertex.gif";

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
