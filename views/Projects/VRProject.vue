<template>
    <div>
    
    <!-- Titre -->
    <h1 style="margin-left: 10px;">VR Research Project</h1>
    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
        <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Unreal%20Engine-%23313131.svg?logo=unrealengine&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="C++" src="https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Blueprint%20-%23313131.svg?logo=unrealengine&logoColor=white" />

    <img class="w-auto h-5 rounded-none text-xs" alt="Meta" src="https://img.shields.io/badge/Meta-%230467DF.svg?style=for-the-badge&logo=Meta&logoColor=white" />
    <img class="w-auto h-5 rounded-none text-xs" alt="level Design" src="https://img.shields.io/badge/-Game Design-ee05fa" />
</h4>
    
        <h4 class="text-gray-600 font-medium text-xs">Done in 1 week on September 2025</h4>
        <div class="flex flex-wrap mt-5 gap-2 items-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e5E2oZ4H4B4?si=BniISZ7JMkB-8nco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
        <div class="pt-7">
            <p class="font-thin text-sm pb-2.5">
                A VR Project! This can be seen mostly as a research or a prototype
            </p>
            <p class="font-thin text-sm pb-2.5">
Project Saturne is an infinite VR wave shooter that leverages hand tracking technology as its core mechanic. The game’s Unique Selling Point (USP) is the use of finger movements to trigger actions, allowing players to fight endless waves of enemies without controllers.            </p>
            <p class="font-thin text-sm pb-2.5">
To ensure a comfortable VR experience, we designed the game with a stationary player to minimize visual load and motion sickness.
            

</p>


<h2 style="margin-left: 10px;"> <br></br><b>My Technical Contributions</b></h2>

<p class="font-thin text-sm pb-2.5">
    <span class="font-bold">Engine & Plugin Architecture (C++):</span> I took ownership of the project's stability by resolving critical compatibility issues between the Meta XR Plugin and Unreal Engine 5.6.1. Since no official version of the plugin existed for this engine release, I refactored parts of the plugin's C++ source code to fix compilation errors and ensure successful builds.
</p>

<p class="font-thin text-sm pb-2.5">
    <span class="font-bold">Hand Pose Recognition System:</span> I designed and implemented the core input system that detects specific hand shapes, translating raw hand tracking data into gameplay triggers (shooting, shielding, reloading).
</p>

<p class="font-thin text-sm pb-2.5">
    <span class="font-bold">Meta XR Integration:</span> I led the research and testing phase for the Meta XR ecosystem, establishing the pipeline for hand tracking before the rest of the team started feature work.
</p>

        <div class="video-container">
      <video class="w-auto h-60" controls>
        <source src="@/assets\GameAssets\VR\handtest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>

        <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Hand Tracking Prototype</h4>
        </div>

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
    </style>
    