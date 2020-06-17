<template lang="pug">
.app(id=app)
  component(:is='layout')
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
    }
  },

  computed: {
    layout () {
      return (this.$route.meta.layout || 'basic') + '-layout'
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
