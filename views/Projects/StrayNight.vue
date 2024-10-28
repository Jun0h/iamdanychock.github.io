<template>
<div>

<!-- Titre -->
    <h1>Stray's Night</h1>
    <h4 class="text-gray-600 font-medium text-xs" style="padding-bottom: 10px; display: flex; gap: 5px;">
    <img class="w-auto h-5 rounded-none text-xs" alt="Godot" src="https://img.shields.io/badge/Made%20with-Godot-478CBF?style=flat&logo=godot%20engine&logoColor=white" />
    <img class="w-auto h-5 rounded-none text-xs" alt="GD Script" src="https://img.shields.io/badge/-GD Script-478CBF" />
</h4>

    <h4 class="text-gray-600 font-medium text-xs">Done in March 2022</h4>
    <div class="flex flex-wrap mt-5 gap-2 items-center">


    <img class="w-15  h-15" src="@/assets\GameAssets\Star\1.png">


    </div>
    <div class="pt-7">
        <p class="font-thin text-sm pb-2.5">
            The very first project I carried out on Godot Engine using GD Script.

        </p>
        <p class="font-thin text-sm pb-2.5">
            So it's a 2D platformer featuring a cat walking from building to building while avoiding the void and enemies on the rooftops.
        </p>
        <p class="font-thin text-sm pb-2.5">
            As an anecdote, this project was done in preparation for my entrance exam at ISART.
            (looks like it worked)

    </p>
    <p class="font-thin text-sm pb-2.5">
        Platformers have always had a significant place in my vision of video games, especially Celeste, which is one of the games that pushed me to pursue this path!        </p>


    </div>
    <div class="flex justify-center">

<iframe frameborder="0" src="https://itch.io/embed/1486965?linkback=true" width="552" height="167"><a href="https://jun0h.itch.io/strays-night">Stray's Night by Dany</a></iframe>
</div>

<div class="flex justify-center">

    <div class="image-container">
    <img class="w-auto h-autp" src="@/assets/GameAssets/Star/2.png">
    <img class="w-auto h-auto" src="@/assets/GameAssets/Star/3.png">
</div>


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
