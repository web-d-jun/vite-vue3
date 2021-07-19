<template>
    <div id="menuContainer">
        <div class="project-info__container flex flex-wrap">
            <div class="logo__wrap">
                <img src="@/assets/logo.png" class="logo" alt="" />
            </div>
            <div class="logo__wrap">
                <img src="@/assets/vite.svg" alt="" class="logo" />
            </div>
        </div>
        <template v-for="i in 8" :key="i">
            <AppMenuItem>
                <template #button>
                    <AppButton>
                        <template #icon>
                            <font-awesome-icon icon="home" class="icon" />
                        </template>
                        <template #text> <span class="menu-text__contents">DashBoard</span></template>
                    </AppButton>
                </template>
            </AppMenuItem>
        </template>
    </div>
</template>
<script setup>
import AppMenuItem from 'components/AppMenuItem.vue'
import AppButton from 'components/AppButton.vue'
</script>
<style lang="scss" scoped>
#menuContainer {
    width: 300px;
    height: calc(100% - #{$headerHeight});
    position: absolute;
    left: 0;
    .project-info__container {
        .logo {
            width: 40px;
            height: 40px;
        }
    }
    .icon {
    }
    .menu-text__contents {
        font-size: 1.8rem;
    }
}
</style>