<template>
    <button type="button" :class="['button ripple-button', props.shape]">
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </button>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
    shape: {
        default: 'react',
        type: String,
    },
})
onMounted(() => {
    const buttonElement = document.querySelectorAll('.ripple-button')
    buttonElement.forEach((el) => {
        el.addEventListener('click', (event) => {
            console.log(event)
            const circle = document.createElement('div')
            circle.classList.add('ripple')
            const d = Math.max(el.clientWidth, el.clientHeight)
            console.log(el.clientHeight)
            console.log(d, 'ddd')
            circle.style.width = circle.style.height = `${d / 2}px`
            const circleArea = d / 2
            circle.style.left = `${event.clientX - el.offsetLeft - circleArea / 2}px`
            circle.style.top = `${event.clientY - el.offsetTop - el.clientHeight - circleArea / 2}px`
            setTimeout(() => {
                // el.removeChild(circle)
            }, 1000)
            el.appendChild(circle)
        })
    })
})
</script>
<style lang="scss" scoped>
.button {
    width: 100%;
    min-height: 40px;
    outline: 0;
    border: 0;
    position: relative;
    // background: #F4F2F5;
    background-color: transparent;
    overflow: hidden;
    // box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px, rgb(0 0 0 / 14%) 0px 2px 2px, rgb(0 0 0 / 12%) 0px 3px 1px -2px;
    border-radius: 4px;
    &.round {
        border-radius: 50%;
    }
    & ::v-deep .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        transform: scale(0);
        animation: ripple 0.4s linear;
    }
}

@keyframes ripple {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}
</style>