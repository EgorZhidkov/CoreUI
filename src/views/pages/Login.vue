<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    v-model="user.inputUsername"
                    placeholder="Username"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    v-model="user.inputPassword"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="submit()">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                  <CRow style="justify-content: center;">
                    <transition name="fade">
                      <p v-if="show" style="text-align: center;">{{msg}}</p>
                    </transition>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios"
import storageUser from './storageUser.js'
export default {
  name: 'Login',
  data: function() {
    return{
      user: {
        inputUsername: null,
        inputPassword: null,
      },
      message: {
        loading: "Loading...",
        success: "Success",
        failed: "Failed!"
      },
      msg: "",
      show: false
    }
  },
  methods: {
    submit(){
      console.log(this.$store.state)
      console.log("objInput", this.user)
      const formData = JSON.stringify(this.user)
      let loggIN = false;
      const {inputUsername, inputPassword} = this.user;

      this.show = !this.show;
      storageUser.map((oneUserInfo) => {
        const {username, password, name, role} = oneUserInfo;
        if(inputUsername === username && inputPassword === password){
          loggIN = true;
          console.log('store', oneUserInfo)
          this.$store.commit('setUser', oneUserInfo);
        }
      });
      if(loggIN){
        this.msg = this.message.success;
        this.$store.getters.setUserInfo;
        console.log(this.$store.state)
        this.$router.push({path: '/dashboard'})
      }else{
        this.msg = this.message.failed;
      }
      console.log('asd',formData);
    }
  }
}
</script>
