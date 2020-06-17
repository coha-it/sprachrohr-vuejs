<template lang="pug">
.basic-layout-wrapper
  sui-sidebar-pushable
    sui-sidebar-pusher.ui.full.height(:class="isSideBarVisible() ? 'pushed' : 'unpushed'" :dimmed='isDimmed()' @click='(isSideBarVisible()) ? toggleSideBar() : null')
      router-view(@event='clickedPlay')
  MenuButton(@event='toggleSideBar')
  SideBar(:visible='isSideBarVisible()')
  BottomBar
</template>

<script>
import SideBar from '@/components/SideBar'
import BottomBar from '@/components/BottomBar'
import MenuButton from '@/components/MenuButton'

export default {
  name: 'FrontendLayout',

  components: {
    SideBar,
    BottomBar,
    MenuButton
  },

  data () {
    return {
      visible: false,
      window: {
        width: 0,
        height: 0,
        iMobileWidth: 770
      }
    }
  },

  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    clickedPlay: function () {
      console.log('joghurtmann von parent')
    },
    isSideBarVisible: function () {
      return this.window.width >= this.window.iMobileWidth || this.visible
    },
    isDimmed: function () {
      return this.isSideBarVisible() && this.window.width < this.window.iMobileWidth
    },
    toggleSideBar: function () {
      this.visible = !this.visible
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>
