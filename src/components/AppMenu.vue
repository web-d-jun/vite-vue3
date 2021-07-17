<template>
    <div id="menuContainer">
        <div class="logo__container">
            <img src="@/assets/logo.png" class="logo" alt="" />
        </div>
    </div>
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
    .logo__container {
        .logo {
            width: 40px;
            height: 40px;
        }
    }
}
</style>