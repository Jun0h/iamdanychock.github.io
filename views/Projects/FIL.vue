<template>
    <div>
    
    <!-- Titre -->
    <h1 style="margin-left: 10px;">Floor is L̵̨̛̠̦̲͎̠̗̳͑̇̌̈͛̓͛̽͐͆̈́̍͝͝o̶̢̥̺̥͚̗̱͓̎̑̅̄̿͐́̂̌͑̽̕̚͝v̶̢̪͈̦̽́̆́̾̈́̂͑̓̑̚͝ȩ̷̺̺͖̻͕̟̦̣͇͖̊́̔͆̕͝ͅ</h1>
    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
        <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Unreal%20Engine-%23313131.svg?logo=unrealengine&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="C#" src="https://img.shields.io/badge/-Blueprint-6aa84f" />
    <img class="w-auto h-5 rounded-none text-xs" alt="level Design" src="https://img.shields.io/badge/-Level Design-ff0303" />
    <img class="w-auto h-5 rounded-none text-xs" alt="level Design" src="https://img.shields.io/badge/-Game Design-ee05fa" />
</h4>
    
        <h4 class="text-gray-600 font-medium text-xs">Done from December 2024 to January 2025</h4>
        <div class="flex flex-wrap mt-5 gap-2 items-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GwJaKi1Xl_w?si=14UMr9nyzYeICds6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
        <div class="pt-7">
            <p class="font-thin text-sm pb-2.5">
                First project done in Unreal Engine 5, this one is based on the concept "The Floor is Lava" where the player has to avoid touching the ground.
            </p>
            <p class="font-thin text-sm pb-2.5">
                The player has to use the environment to avoid touching the 'lava' and reach the end of the level. The original idea was to reproduce Stanley Kunbick's "The Shining" and my first objective was to reproduce the mythic elevator scene. 
            </p>

            <div class="video-container">
      <video class="w-60 h-60" controls>
        <source src="@/assets\GameAssets\FIL\blood.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">First Version</h4>
        </div>

            <p class="font-thin text-sm pb-2.5">
            The original idea was cool but it felt very limited in terms of gameplay bricks, I had to think about enemies, drones, and most importantly a gun that doesn't do damage but shoot bullets that lures the enemies.         
            </p>
        <p class="font-thin text-sm pb-2.5">
        After that I've completely changed the art direction using an old idea based on my project 'An Eye for an Eye'. From that I adapted the effects and created different effects to fit the style.
        </p>

        <div class="video-container">
      <video class="w-60 h-60" controls>
        <source src="@/assets\GameAssets\FIL\buuug.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Glitched Voronoi Effect</h4>
        </div>

        <p class="font-thin text-sm pb-2.5">
            And from that to finally adapt the elevator opening scene with that glitched aesthetic.

        </p>
        </div>
    
        <div class="video-container">
      <video class="w-auto h-60" controls>
        <source src="@/assets\GameAssets\FIL\final version.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Final Opening Scene</h4>
        </div>


        <p class="font-thin text-sm pb-2.5">
            This project was very challenging for a first experience in Unreal Engine 5, but also helped me to discover a whole new world of possiblities with the completely different graphic pipeline.

        </p>
    
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
    