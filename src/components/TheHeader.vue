<template>
    <div id="header" class="flex">
        <!-- <app-button shape="round">
            <template #icon></template>
        </app-button> -->
        <div class="icon__container"><IconBars /></div>
        <div class="switch__container flex align-center">
            <div
                :class="[
                    'dark-bright__wrap',
                    { dark: active, bright: !active },
                ]"
            >
                <div><font-awesome-icon icon="sun"></font-awesome-icon></div>
                <div><font-awesome-icon icon="moon"></font-awesome-icon></div>
            </div>

            <AppSwitch :active="active" @click="active = !active" />
            <div class="theme-change-animation"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import AppButton from 'components/AppButton.vue'
import IconBars from 'icons/Bars.vue'
import AppSwitch from 'components/AppSwitch.vue'
const active = ref(false)
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
        }
        & .theme-change-animation {
            position: fixed;
            z-index: -9999;
            border-radius: 50%;
            background: #000;
            width: 2000px;
            height: 2000px;
            right: -60%;
            top: -130%;
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
        }
    }
}
</style>
