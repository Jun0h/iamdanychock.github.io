<template>
<div>
    <div class="flex justify-center">

    <img class="w-auto h-60" src="@/assets/Biography/me.jpg" />
</div>


<h1 class="font-bold text-2xl">Dany Osorio Echeverry</h1>
<h2 class="text mt-2 mb-2 font-medium text-lg flex flex-wrap items-center gap-1">
    
    <span>Gameplay Programmer | Tool Programmer |</span>
    
    <span class="glitch relative inline-block text-black" data-text="Tech Artist">
      Tech Artist
    </span>

  </h2>

    <h4 class="text-gray-600 font-medium text-xs">Paris,France 📍</h4>
    <div class="flex flex-wrap mt-5 gap-2 items-center">
        <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
            <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Unreal%20Engine-%23313131.svg?logo=unrealengine&logoColor=white" />
            <img class="w-auto h-5 rounded-none text-xs" alt="Unity" src="https://img.shields.io/badge/-Unity-000000?style=flat-square&logo=unity&logoColor=white" />
            <img class="w-auto h-5 rounded-none text-xs" alt="Godot" src="https://img.shields.io/badge/Godot%20Engine-478CBF?logo=godotengine&logoColor=fff&style=flat" />
                        <img class="w-auto h-5 rounded-none text-xs" alt="Meta" src="https://img.shields.io/badge/Oculus-%231A1A1A.svg?logo=oculus&logoColor=white" />

        </h4>

        <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">

        <img class="w-auto h-5 rounded-none text-xs" alt="Git" src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Perforce" src="https://img.shields.io/badge/-PERFORCE%20HELIX-00AEEF?style=for-the-badge&logo=Perforce&logoColor=white" />

        <img class="w-auto h-5 rounded-none text-xs" alt="VS" src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio-5C2D91.svg?&logo=visual-studio&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Rider" src="https://img.shields.io/badge/Rider-000?logo=rider&logoColor=fff" />

        <img class="w-auto h-5 rounded-none text-xs" alt="Jira" src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Blender" src="https://img.shields.io/badge/Blender-%23F5792A.svg?logo=blender&logoColor=white" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Figma" src="https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=fff" />




        </h4>
        <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">

             <img class="w-auto h-5 rounded-none text-xs" alt="C++" src="https://img.shields.io/badge/C++-%2300599C.svg?logo=c%2B%2B&logoColor=white" />
            <img class="w-auto h-5 rounded-none text-xs" alt="C#" src="https://custom-icon-badges.demolab.com/badge/C%23-%23239120.svg?logo=cshrp&logoColor=white" />
            <img class="w-auto h-5 rounded-none text-xs" alt="Unreal" src="https://img.shields.io/badge/Blueprint%20-%23313131.svg?logo=unrealengine&logoColor=white" />

            <img class="w-auto h-5 rounded-none text-xs" alt="HLSL" src="https://img.shields.io/badge/-HLSL-8c5aee" />
            <img class="w-auto h-5 rounded-none text-xs" alt="GLSL" src="https://img.shields.io/badge/-GLSL-8c5aee" />

            <img class="w-auto h-5 rounded-none text-xs" alt="HTML/CSS" src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white" />
            <img class="w-auto h-5 rounded-none text-xs" alt="CSS" src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" />

            <img class="w-auto h-5 rounded-none text-xs" alt="Python" src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" />





        </h4>
        <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">

        <img class="w-auto h-5 rounded-none text-xs" alt="Vue" src="https://img.shields.io/badge/-UI-61b083" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Flask" src="https://img.shields.io/badge/-UX-406893" />
        <img class="w-auto h-5 rounded-none text-xs" alt="MongoDB" src="https://img.shields.io/badge/-Game Design-4ca158" />
        <img class="w-auto h-5 rounded-none text-xs" alt="level Design" src="https://img.shields.io/badge/-Level Design-64a2c9" />
        </h4>
    </div>
    <div class="pt-7">
        <h3 class="underline font-bold text-md pb-1">About Me</h3>
        <p class="font-thin text-sm pb-2.5">
  I’m a {{ new Date().getFullYear() - 2003 - (new Date().getMonth() < 5 || (new Date().getMonth() === 5 && new Date().getDate() < 11) ? 1 : 0) }} year old Gameplay Programmer, Tool Programmer and Tech Artist based in Paris, France.
        </p>
        <p class="font-thin text-sm pb-2.5">
            I specialize in C# Scripting on Unity, but I also have a great experience using Godot or more recently Unreal Engine. Prototyping all sorts of features, from basic character behaviours to sound implementation systems.        
        </p>

        <AsciiAnimation />

    </div>





</div>
</template>
<style scoped>

.gameplay-letter {
  display: inline-block;
  animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

    .glitch {
  position: relative;
  color: black; 
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #C3C3C3;
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00c1;
  clip-path: inset(44% 0 61% 0);
  animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -1px 0 #00fff9;
  clip-path: inset(50% 0 30% 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(20% 0 80% 0); }
  20% { clip-path: inset(60% 0 10% 0); }
  40% { clip-path: inset(40% 0 50% 0); }
  60% { clip-path: inset(80% 0 5% 0); }
  80% { clip-path: inset(10% 0 70% 0); }
  100% { clip-path: inset(30% 0 20% 0); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(10% 0 60% 0); }
  20% { clip-path: inset(30% 0 10% 0); }
  40% { clip-path: inset(70% 0 20% 0); }
  60% { clip-path: inset(20% 0 50% 0); }
  80% { clip-path: inset(50% 0 30% 0); }
  100% { clip-path: inset(5% 0 80% 0); }
}
</style>
