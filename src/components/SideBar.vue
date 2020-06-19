<template lang="pug">
  .ui.sidebar.vertical.menu.right.overlay(
    :class="(visible ? 'visible ' : '') + (dimmed ? 'dimmed ' : '')"
  )
    .item(@click="$router.push({name: 'podcasts'})")
      i.home.icon
      | Podcasts
    .item(@click="$router.push({name: 'demo'})")
      i.demo.icon
      | Demo
</template>

<script>
export default {
  data () {
    return {
    }
  },

  props: {
    visible: Boolean,
    dimmed: Boolean
  }
}
</script>
