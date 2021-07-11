<template>
    <div id="header">
        <!-- <app-button shape="round">
            <template #icon></template>
        </app-button> -->
        <div class="icon__contents"><IconBars /></div>
    </div>
</template>
<script setup>
import AppButton from 'components/AppButton.vue'
import IconBars from 'icons/Bars.vue'
</script>
<style lang="scss" scoped>
#header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid green;
    display: flex;
    align-items: center;
}
</style>