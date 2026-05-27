<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const popupRoot = ref(null)
let cryptidTimer = null
let titleContainer = null
let titleSpan = null
let originalTitleText = ""

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const addCombiningMarks = (count) => {
    let marks = ""
    for (let i = 0; i < count; i += 1) {
        marks += String.fromCharCode(randomInt(0x0300, 0x036F))
    }
    return marks
}

const makeCryptidText = (text) =>
    text
        .split("")
        .map((char) => {
            if (char.trim() === "") {
                return char
            }
            return char + addCombiningMarks(randomInt(1, 3))
        })
        .join("")

const setupCryptidTitle = (windowEl) => {
    const nameEl = windowEl.querySelector('.window-name')
    if (!nameEl) {
        return
    }

    // Fallback to the element's full textContent so we handle nested nodes
    const fullText = nameEl.textContent ?? ""
    const trimmed = fullText.trim()
    if (!trimmed) {
        return
    }

    originalTitleText = fullText
    const baseText = trimmed
    const span = document.createElement('span')
    span.className = 'popup-cryptid'
    span.textContent = baseText
    // Replace the element's content with the cryptid span
    while (nameEl.firstChild) {
        nameEl.removeChild(nameEl.firstChild)
    }
    nameEl.appendChild(span)
    titleContainer = nameEl
    titleSpan = span

    const update = () => {
        if (titleSpan) {
            titleSpan.textContent = makeCryptidText(baseText)
        }
    }

    update()
    cryptidTimer = setInterval(update, 100)
}

onMounted(() => {
    const rootEl = popupRoot.value
    const windowEl = rootEl?.closest('.window')
    if (windowEl) {
        windowEl.classList.remove('popup-glitch')
        setupCryptidTitle(windowEl)
    }
})

onUnmounted(() => {
    if (cryptidTimer) {
        clearInterval(cryptidTimer)
        cryptidTimer = null
    }
    if (titleContainer && titleSpan) {
        const textNode = document.createTextNode(originalTitleText)
        titleContainer.replaceChild(textNode, titleSpan)
        titleContainer = null
        titleSpan = null
        originalTitleText = ""
    }
})
</script>

<template>
    <div ref="popupRoot" class="popup-root">
        <iframe class="popup-iframe" src="https://store.steampowered.com/widget/4196120/"></iframe>
    </div>
</template>

<style scoped>
:deep(.window) {
    /* Keep window chrome sizing untouched so chrome is not scaled */
    height: auto !important;
}

:deep(.content) {
    flex-grow: 0 !important;
    width: 100% !important;
    height: auto !important;
    max-height: 190px !important;
    padding: 0 !important;
    overflow: hidden !important;
}

.popup-root {
    width: 90vw;
    max-width: 646px;
    aspect-ratio: 646 / 190;
    margin: 0 auto;
}

.popup-iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
}

:deep(.popup-cryptid) {
    display: inline-block;
    animation: popup-cryptid-jitter 1.1s infinite steps(1, end);
    text-shadow: 1px 0 rgba(255, 0, 0, 0.3), -1px 0 rgba(0, 255, 255, 0.3);
}

@keyframes popup-cryptid-jitter {
    0% { transform: translate(0, 0); }
    18% { transform: translate(1px, -1px); }
    36% { transform: translate(-1px, 1px); }
    54% { transform: translate(1px, 0); }
    72% { transform: translate(-1px, 0); }
    100% { transform: translate(0, 0); }
}
</style>
