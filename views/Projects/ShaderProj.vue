<template>
<div>

<!-- Titre -->
    <h1>Shader Exploration Project</h1>
    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
        <img class="w-auto h-5 rounded-none text-xs" alt="Godot" src="https://img.shields.io/badge/Made%20with-Unity-000000.svg?style=flat&logo=unity" />
        <img class="w-auto h-5 rounded-none text-xs" alt="HLSL" src="https://img.shields.io/badge/-HLSL-8c5aee" />
        <img class="w-auto h-5 rounded-none text-xs" alt="HLSL" src="https://img.shields.io/badge/-ShaderGraph-8c5aee" />
        <img class="w-auto h-5 rounded-none text-xs" alt="Blender" src="https://img.shields.io/badge/Blender-%23F5792A.svg?logo=blender&logoColor=white" />

</h4>

    <h4 class="text-gray-600 font-medium text-xs">Work in Progress</h4>
    <div class="flex flex-wrap mt-5 gap-2 items-center">


        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/D19i8s2q2HY?si=vbECcpbNeU8TbHRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    </div>
    <div class="pt-7">
        <p class="font-thin text-sm pb-2.5">
            This project doesn't really have the purpose of being a game, but a testing field for Shaders!

        </p>
        <p class="font-thin text-sm pb-2.5">
            The main objective is to build different worlds based on different shaders themes, for example:

            <ul>
                <li>Sketchy World -> Metro</li>
                <li>Alice in Wonderland -> Psychodelic </li>
                <li>Animal Crossing -> PSX</li>
            </ul>

        </p>
        <p class="font-thin text-sm pb-2.5">
            

    </p>
    <p class="font-thin text-sm pb-2.5">
    I mainly use HLSL and Unity's Shader Graph. The example below, is a demonstration of the 'Sketchy' Shader on a 3D Model and a Sprite.
    </p>

    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/hqimJlvM6TA?si=9HmKMJQHzoKBbr_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


<div class="flex justify-center">



</div>


</div>
</template>

<style scoped>
/*-------------------------------------------*\
    Windows/Display
\*-------------------------------------------*/

.minimize {
    display: none;
}

.window {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    flex-flow: column;
    display: flex;
}

.fullscreen {
    width: 100% !important;
    height: var(--fullscreen) !important;
    margin: 0;
    transition: all 0.5s ease;
    padding: 0;
}

.content {
    flex-grow: 1;
    overflow-x: hidden;
    padding-right: var(--content-padding-right);
    padding-left: var(--content-padding-left);
    padding-top: var(--content-padding-top);
    padding-bottom: var(--content-padding-bottom);
}

/*-------------------------------------------*\
    Top Bar
\*-------------------------------------------*/

.top-bar {
    background: rgb(0, 0, 124);
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.top-bar-window {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    z-index: 10;
    margin: 2px;
    padding: 2px 2px 2px 2px;
}

.top-bar-deactivated {
    background: rgb(123, 125, 123);
}

.top-bar:hover {
    cursor: default;
}

.window-name {
    color: white;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0;
    font-size: 16px;
    margin: 0 0 0 3px;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

.image-container {
    display: inside;
    gap: 10px; /* espace entre les images */
}
</style>
