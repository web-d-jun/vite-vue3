<template>
    <div id="menuItemContainer" class="flex flex-col justify-center align-center">
        <slot name="button"></slot>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#menuItemContainer {
    width: 100%;
    min-width: 50px;
    height: auto;
    max-height: 100px;
    font-size: 1.3rem;
    padding: 10px;
}
</style>