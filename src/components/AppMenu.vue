<template>
    <div id="menuContainer">menu container</div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#menuContainer {
    width: 300px;
    height: calc(100% - #{$headerHeight});
    outline: 1px solid blue;
    position: absolute;
    left: 0;
}
</style>