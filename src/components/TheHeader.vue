<template>
    <div id="header" class="flex">
        <!-- <app-button shape="round">
            <template #icon></template>
        </app-button> -->
        <div class="icon__container"><IconBars /></div>
        <div class="switch__container flex align-center">
            <div :class="['dark-bright__wrap', { dark: active, bright: !active }]">
                <div><font-awesome-icon icon="sun"></font-awesome-icon></div>
                <div><font-awesome-icon icon="moon"></font-awesome-icon></div>
            </div>

            <AppSwitch :active="active" @click.prevent.stop="handleSwitch" class="cursor-pointer" />
            <div class="theme-change-animation"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import AppButton from 'components/AppButton.vue'
import IconBars from 'icons/Bars.vue'
import AppSwitch from 'components/AppSwitch.vue'
const active = ref(false)

const EventListenerTheme = () => {
    const themeButtonElement = document.querySelector('#switch')
    const blackAndWhiteThemeElement = document.querySelector('.theme-change-animation')
    const switchContainerElement = document.querySelector('.switch__container')
    console.log(switchContainerElement,'switchContainerElement')
    const mouseOverOut = () => {
        themeButtonElement.addEventListener('mouseover', (e) => {
            blackAndWhiteThemeElement.style.right = '-1500px'
            blackAndWhiteThemeElement.style.top = '-1700px'
            console.log(e)
        })
        themeButtonElement.addEventListener('mouseout', (e) => {
            blackAndWhiteThemeElement.style.right = '-2000px'
            blackAndWhiteThemeElement.style.top = '-2000px'
        })
    }
    const mouseClick = () => {
        console.log(active.value)

        blackAndWhiteThemeElement.style.right = '-1000px'
        blackAndWhiteThemeElement.style.top = '-1000px'
    }
    return {
        mouseOverOut,
        mouseClick,
    }
}

const handleSwitch = () => {
    const eventListenerTheme = EventListenerTheme()
    active.value = !active.value
    eventListenerTheme.mouseClick()
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
    outline: 1px solid green;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px;
    box-sizing: border-box;
    .icon__container {
        flex: 1;
    }
    .switch__container {
        height: 20px;
        overflow: hidden;
        position: relative;
        // &:hover {
        //     & .theme-change-animation {
        //         right: -1500px;
        //         top: -1700px;
        //     }
        // }

        & .dark-bright__wrap {
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
                background: #ffe000;
            }
            &.bright ~ .theme-change-animation {
                background: #000;
            }
        }
        & .theme-change-animation {
            position: fixed;
            z-index: -9999;
            border-radius: 50%;
            background: #000;
            width: 2000px;
            height: 2000px;
            right: -2000px;
            top: -2000px;
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
        }
    }
}
</style>
