<template lang="pug">
div
  .ui.card(v-for='(podcast, i) in podcasts' :key='podcast._id' style='max-width: 100%; min-width: 100%;')
    .content(style='padding: 0;')
      .ui.items
        .item
          .ui.medium.image(v-if='podcast.image')
            img(:src='podcast.image')
          .content(style='padding: 1rem;')
            a.header
              | {{ podcast.title }}
            .meta
              p.desc.short
                | {{ podcast.desc_short }}
              template(v-if='getCurrentPodcastId() === podcast._id')
                button.ui.button(primary='' disabled='' active='' readonly='')
                  | Wird abgespielt
              template(v-else='')
                button.ui.button(primary='' @click='clickedPlay(podcast)') Anh&ouml;ren
            .description
              p
            .extra
              .ui.label IMAX
              .ui.label
                i.globe.icon
                | Additional Languages
</template>
<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      podcasts: 'audio/podcasts'
    }),
    podcast () {
      return this.$store && this.$store.state ? this.$store.state.podcast : null
    }
  },

  created: function () {
    this.$store.dispatch('audio/fetchPodcasts')
  },

  methods: {
    clickedPlay (podcast) {
      // this.$root.$data.podcast = podcast
      this.$set(
        this.$store.state,
        'podcast',
        podcast
      )
    },

    getCurrentPodcastId () {
      return this.podcast ? this.podcast._id : 0
    }
  }

}
</script>
