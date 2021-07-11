<template>
    <div
        :class="['bars__contents', { open: barsStatus }]"
        @click="barsStatus = !barsStatus"
    >
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
    </div>
</template>
<script setup>
import { ref } from '@vue/reactivity'

const barsStatus = ref(false)
</script>
<style lang="scss" scoped>
.bars__contents {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 25px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s cubic-bezier(0.89, 0.07, 0.05, 0.72);
    -moz-transition: 0.5s cubic-bezier(0.89, 0.07, 0.05, 0.72);
    -o-transition: 0.5s cubic-bezier(0.89, 0.07, 0.05, 0.72);
    transition: 0.5s cubic-bezier(0.89, 0.07, 0.05, 0.72);
    & .bar-piece {
        display: block;
        position: absolute;
        height: 5px;
        width: 50%;
        opacity: 1;
        left: 0;
        background-color: #000;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s cubic-bezier(0.89, 0.07, 0.05, 0.72);
        -moz-transition: 0.25s cubic-bezier(0.89, 0.07, 0.05, 0.72);
        -o-transition: 0.25s cubic-bezier(0.89, 0.07, 0.05, 0.72);
        transition: 0.25s cubic-bezier(0.89, 0.07, 0.05, 0.72);
        &:nth-child(1),
        &:nth-child(2) {
            top: 0%;
        }
        &:nth-child(3),
        &:nth-child(4) {
            top: 33%;
        }
        &:nth-child(5),
        &:nth-child(6) {
            top: 66%;
        }
        &:nth-child(odd) {
            left: calc(0% + 3px);
            border-radius: 2px 0 0 2px;
        }
        &:nth-child(even) {
            left: calc(50% - 3px);
            border-radius: 0 2px 2px 0;
        }
    }
    &.open {
        & .bar-piece {
            &:nth-child(1),
            &:nth-child(2) {
                top: 15%;
            }
            &:nth-child(5),
            &:nth-child(6) {
                top: 51%;
            }
            &:nth-child(1),
            &:nth-child(6) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            &:nth-child(2),
            &:nth-child(5) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
            &:nth-child(3) {
                left: -100%;
                opacity: 0;
            }
            &:nth-child(4) {
                left: 100%;
                opacity: 0;
            }
        }
    }
}
</style>