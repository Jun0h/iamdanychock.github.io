<template>
    <div>
    
    <!-- Titre -->
    <div class="image-container">
      <img class="main-image" src="@/assets/WorkAssets/Fleur/Image1.png" alt="Fleur" />
      <img class="abadakor-image" src="@/assets/WorkAssets/Fleur/Abadakor.png" alt="Fleur" />
    </div>
    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
    <img class="w-auto h-5 rounded-none text-xs" alt="Unity" src="https://img.shields.io/badge/Made%20with-Unity-000000.svg?style=flat&logo=unity" />
    <img class="w-auto h-5 rounded-none text-xs" alt="C#" src="https://custom-icon-badges.demolab.com/badge/C%23-%23239120.svg?logo=cshrp&logoColor=white" />
    <img class="w-auto h-5 rounded-none text-xs" alt="Game Design" src="https://img.shields.io/badge/-Game Design-ee05fa" />
                <img class="w-auto h-5 rounded-none text-xs" alt="HLSL" src="https://img.shields.io/badge/-HLSL-8c5aee" />

</h4>
    
        <h4 class="text-gray-600 font-medium text-xs">Internship from February to April 2025</h4>
            <h4 class="text-gray-600 font-medium text-xs">Remote 📍</h4>


        <div class="pt-7">
           




     <p class="font-thin text-sm pb-2.5">
                My first internship ! 
            </p>
            <p class="font-thin text-sm pb-2.5">
  I worked during 2 months at
  <a
    href="https://www.instagram.com/abadakor.studio/"
    target="_blank"
    rel="noopener"
    class="text-blue-600 underline hover:text-blue-800"
  >
    Abadakor Studio
  </a>,
  a small indie studio based in Nantes, France.
</p>

            <p class="font-thin text-sm pb-2.5">
                I worked on their current project, a small strategy game called Fleur, where the player has to grow small seeds to make them units in order to eliminate the other players ! 
            </p>


              <img src="@/assets/WorkAssets/Fleur/Fleur.gif" alt="Demo Fleur" style="width: 100%; max-width: 400px; display: block; margin: 16px auto;"
  />
            <p class="font-thin text-sm pb-2.5">
                My main work consisted in prototyping the game mechanics for such units exploring a variety of gamplay bricks to make sure that everything is balanced and fun to play.
            </p>

            <img src="@/assets/WorkAssets/Fleur/2.gif" alt="Demo Fleur" style="width: 100%; max-width: 400px; display: block; margin: 16px auto;">
        <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Units</h4>
        </div>
                        <p class="font-thin text-sm pb-2.5">
                My work also consisted in integrating their assets and testing Visual Effects using Particle System or HLSL Shader, while having a big creative freedom and respecting the juiciness principle to make it engaging to the players.
            </p>

            <img src="@/assets/WorkAssets/Fleur/1.gif" alt="Demo Fleur" style="width: 100%; max-width: 400px; display: block; margin: 16px auto;">
        <div class="flex justify-center items-center">
            <h4 class="text-gray-600 font-medium text-xs">Poison Effect mixing 2D animation and particles system</h4>
        </div>

        <p class="font-thin text-sm pb-2.5">
                We used a 'complex' animation system, reworking the unity animator to make it more flexible regarding player customization, so I had to make sure that the animations were synchronized and not looking odd when the player was doing their actions.
            </p>

            <img src="@/assets/WorkAssets/Fleur/7.gif" alt="Demo Fleur" style="width: 50%; max-width: 300px; display: block; margin: 16px auto;">


        <p class="font-thin text-sm pb-2.5">
                In conclusion, this internship was a blast, I learned a lot about prototyping and working on a reduced team, to make a MVP (Most Viable Prototype). I'm really thankful for this opportunity, giving me a good sigh of indie game development and the chance to work with a talented artist !
            </p>


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
  align-items: flex-end; /* aligne les images en bas */
  gap: 16px;             /* espace entre les deux images */
}

.main-image {
  width: 220px;
  height: auto;
  display: block;
}

.abadakor-image {
  width: 100px;   /* plus petit */
  height: auto;
  display: block;
}
    </style>
