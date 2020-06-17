<template lang="pug">
.ui.basic.segment
  h1 Podcasts
  PodcastList
</template>
<script>
import PodcastList from '@/components/PodcastList'

export default {

  components: {
    PodcastList
  },

  data () {
    return {
      //
    }
  }
}
</script>
