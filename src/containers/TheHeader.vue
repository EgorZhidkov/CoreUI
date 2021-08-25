<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="this.toggleSidebarMobile"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="this.toggleSidebarDesktop"
    />
    <CHeaderBrand class="mx-auto d-lg-none" @click="logoutHandle()">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink v-if="this.getAdminRole" to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
  computed:{
    ...mapGetters('users', ['getAdminRole'])
  },
  methods:{
    ...mapMutations('sideBar', ['toggleSidebarDesktop', 'toggleSidebarMobile']),
    ...mapActions('users',['logout']),
    logoutHandle(){
      this.logout();
      this.$router.push({path: '/pages/login'})
    }
  }
}
</script>
