<template>
  <!-- https://icon-sets.iconify.design/fa6-solid/ -->
  <!-- https://icon-sets.iconify.design/ -->
  <!-- <span class="iconify-inline" data-icon="fa6-solid:filter" data-rotate="180deg"></span> -->
  <!-- <span class="iconify-inline" data-icon="fa6-solid:filter" data-width="24" data-height="24"></span> -->

<!--     <bx-Icon icon="ant-design:security-scan-filled" size="xxl" /> -->
  <span class="iconify-inline" :data-icon="icon" :data-width="pxSize" :data-height="pxSize"></span>
</template>

<script>
export default {
  props: {
    size: { type: String, default: 'md' },
    icon: { type: String, required: true }
  },

  setup(props) {

    let pxSize = '16'
    if (isNaN(props.size === false)) {
      // If size is a number, assign the number instead of the alias ( sm, md ...)
      pxSize = props.size
    } else {
      switch (props.size) {
        case 'xs': pxSize = '12'
          break;
        case 'sm': pxSize = '16'
          break;
        case 'md': pxSize = '24'
          break;
        case 'lg': pxSize = '28'
          break;
        case 'xl': pxSize = '34'
          break;
        case 'xl': pxSize = '40'
          break;
        case 'xxl': pxSize = '50'
          break;
        default: pxSize = '16'
          break;
      }
    }

    return {
      pxSize,
      icon: props.icon
    }
  }
}
</script>

<!-- <style src='./bx-Icon.scss' lang='scss'></style> -->

