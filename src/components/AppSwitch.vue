<template>
<div id="switch" :class="{active: props.active}">
  <div :class="['switch-button']"></div>
</div>
</template>

<script setup>
const props = defineProps({
  active: {
    default: false,
    type: Boolean
  }
})
</script>
<style lang="scss" scoped>
#switch {
  width: 40px;
  height: 20px;
  border: 1px solid $disabledColor;
  border-radius: 15px;
  background-color: $disabledColor;
  position: relative;
  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
  &.active {
    background-color: #2d2d2d;
    & .switch-button {
      left: 20px;
    }
  }
  
  & .switch-button {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #fff;;
    position: relative;
    left: 0;
    -webkit-transition: 0.1s ease-in-out;
    -moz-transition: 0.1s ease-in-out;
    -o-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;
    
  }
}
</style>