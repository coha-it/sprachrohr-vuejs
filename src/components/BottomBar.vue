<template lang="pug">
sui-menu(is="sui-sidebar" animation="overlay" direction="bottom" visible position="fixed")
  Player
</template>

<script>
import Player from '@/components/Player'

export default {
  name: 'BottomBar',

  components: {
    Player
  },

  methods: {
  }
}
</script>
