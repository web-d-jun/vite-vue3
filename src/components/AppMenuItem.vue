<template>
  <div id="menuItemContainer" class="flex flex-col justify-center align-center">
    <slot name="button"></slot>
    <font-awesome-icon icon="chevron-right" class="chevron-right-icon"></font-awesome-icon>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
#menuItemContainer {
  width: 100%;
  min-width: 50px;
  height: auto;
  max-height: 100px;
  font-size: 1.3rem;
  padding: 10px 20px;
  position: relative;
  & .chevron-right-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    color: var(--default-color);
    transform: translateY(-50%);
  }
}
</style>
