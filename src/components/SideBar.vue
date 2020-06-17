<template lang="pug">
  sui-menu(
    is="sui-sidebar"
    :visible="visible"
    :dimmed="dimmed"
    animation="overlay"
    direction="right"
    vertical
  )
    sui-menu-item(@click="$router.push({name: 'podcasts'})")
      sui-icon(name="home")
      | Podcasts
    sui-menu-item(@click="$router.push({name: 'demo'})")
      sui-icon(name="demo")
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
