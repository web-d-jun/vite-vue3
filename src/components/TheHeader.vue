<template>
    <div id="header">
        <!-- <app-button shape="round">
            <template #icon></template>
        </app-button> -->
        <div class="icon__container"><IconBars /></div>
        <div class="switch__container">
          <AppSwitch :active="active" @click="active = !active"/>
        </div>
    </div>
</template>
<script setup>
import {ref} from  'vue';
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
}
</style>