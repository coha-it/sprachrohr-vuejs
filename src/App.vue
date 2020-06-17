<template lang="pug">
#app
  router-view(:xis="layout")
</template>

<script>
// Load layout components dynamically.

export default {
  data: () => ({
    layout: null,
    defaultLayout: 'frontend'
  }),

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {
  }
}
</script>


<style>

</style>
