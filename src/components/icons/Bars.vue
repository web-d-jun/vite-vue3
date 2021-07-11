<template>
    <div class="bars__contents">
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
        <span class="bar-piece"></span>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.bars__contents {
    position: relative;
    width: 40px;
    height: 45px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
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
        -webkit-transition: 0.25s ease-in-out;
        -moz-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
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
            left: 0;
        }
        &:nth-child(even) {
            left: 50%;
            background-color: red;
        }
    }
}
</style>