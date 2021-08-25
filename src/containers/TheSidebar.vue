<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => this.set(['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="this.set(['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import {mapState, mapMutations} from "vuex";

export default {
  name: 'TheSidebar',
  nav,
  computed: {
    ...mapState('sideBar',['sidebarShow', 'sidebarMinimize']),
    show () {
      return this.sidebarShow 
    },
    minimize () {
      console.log('sidebar', this.sidebarMinimize)
      return this.sidebarMinimize 
    }
  },
  methods:{
    ...mapMutations('sideBar', ['set'])  
  }
}
</script>
