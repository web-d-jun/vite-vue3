<template>
    <div id="header">
        <!-- <app-button>
            <template #icon> </template>
        </app-button> -->
        <IconBars />
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
    border: 1px solid green;
}
</style>