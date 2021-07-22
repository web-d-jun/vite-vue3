<template>
    <div id="header" class="flex">
        <div class="icon__container"><IconBars class="cursor-pointer" @click="isExpandMenu" /></div>
        <div class="switch__container flex align-center">
            <div :class="['dark-bright__wrap', { dark: themeActive, bright: !themeActive }]">
                <div><font-awesome-icon icon="sun"></font-awesome-icon></div>
                <div><font-awesome-icon icon="moon"></font-awesome-icon></div>
            </div>

            <AppSwitch :active="themeActive" @click.prevent.stop="handleSwitch" class="cursor-pointer theme-color" />
            <div class="theme-change-animation"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import AppButton from 'components/AppButton.vue'
import IconBars from 'icons/Bars.vue'
import AppSwitch from 'components/AppSwitch.vue'
import { setCookie, getCookie } from 'js/common.js'
const themeActive = ref(false)
const targetBodyElement = document.querySelector('body')
targetBodyElement.className = ''
console.log(getCookie('themeType'), 'themeType')
if (getCookie('themeType') === '' || getCookie('themeType') === 'bright') {
    //bright
    themeActive.value = false
    targetBodyElement.classList.add('bright')
} else {
    //dark
    themeActive.value = true
    targetBodyElement.className = ''
    targetBodyElement.classList.add('dark')
}

const EventListenerTheme = () => {
    const themeButtonElement = document.querySelector('#switch')
    const blackAndWhiteThemeElement = document.querySelector('.theme-change-animation')
    const switchContainerElement = document.querySelector('.switch__container')
    const mouseOverOut = () => {
        themeButtonElement.addEventListener('mouseover', (e) => {
            blackAndWhiteThemeElement.style.right = '-4500px'
            blackAndWhiteThemeElement.style.top = '-4700px'
        })
        themeButtonElement.addEventListener('mouseout', (e) => {
            blackAndWhiteThemeElement.style.right = '-5000px'
            blackAndWhiteThemeElement.style.top = '-5000px'
        })
    }
    const mouseClick = () => {
        setTimeout(() => {
            targetBodyElement.className = ''
            if (themeActive.value) {
                targetBodyElement.classList.add('dark')
            } else {
                targetBodyElement.classList.add('bright')
            }
        }, 400)

        blackAndWhiteThemeElement.classList.add('play')
        setTimeout(() => {
            blackAndWhiteThemeElement.classList.remove('play')
        }, 1050)
    }
    return {
        mouseOverOut,
        mouseClick,
    }
}

const isExpandMenu = () => {
    alert('/?')
}

const handleSwitch = () => {
    const eventListenerTheme = EventListenerTheme()
    themeActive.value = !themeActive.value
    eventListenerTheme.mouseClick()
    if (themeActive.value) {
        setCookie('themeType', 'dark', 1)
    } else {
        setCookie('themeType', 'bright', 1)
    }
}

onMounted(() => {
    const eventListenerTheme = EventListenerTheme()
    eventListenerTheme.mouseOverOut()
})

// themeButtonElement.addEventListener('mouseover', (e) => {
//     console.log(e)
// })
</script>
<style lang="scss" scoped>
#header {
    width: 100%;
    height: $headerHeight;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px;
    box-sizing: border-box;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    .icon__container {
        flex: 1;
    }
    .switch__container {
        height: 20px;
        overflow: hidden;
        position: relative;
        & .dark-bright__wrap {
            background-color: transparent;
            &.bright {
                top: 10px;
                color: #ff5200;
            }
            &.dark {
                top: -10px;
                color: #ffe000;
            }
            position: relative;

            padding-right: 10px;
            font-size: 15px;
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            &.dark ~ .theme-change-animation {
                background: #1e1f21;
            }
            &.bright ~ .theme-change-animation {
                background: #fff;
            }
        }
        & .theme-change-animation {
            position: fixed;
            z-index: 1;
            border-radius: 50% 0 0 50%;
            background: #000;
            width: 5000px;
            height: 5000px;
            right: -5000px;
            top: -5000px;
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            &.play {
                animation: 1s expand;
            }
        }
    }
}
@keyframes expand {
    to {
        top: -550px;
        right: -200px;
    }
}
</style>
