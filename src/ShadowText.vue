<template>
    <div :style="shadowStyle">
        <slot />
    </div>
</template>

<script>
  export default {
    name: 'ShadowText',
    inheritAttrs: true,
    props: {
        shadowColor: { type: String, default: '#000000' },
        shadowSize: { type: String, default: "0.7em" }
    },
    computed: {
        shadowStyle() {
            return `text-shadow: ${this.shadowColor} 0 0 ${this.shadowSize};`;
        }
    }
  }
</script>

<style scoped>
.shadowed {
    color: red;
}
</style>
