<template>
  <CRow>
    <CCol md="12">
     <CAlert
      :color="color"
      closeButton
      :show.sync="currentAlertCounter"
    >
      {{message}}
      </CAlert>
        <CCard>
          <CCardHeader>
            <strong>Add User</strong> 
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                placeholder="Enter your full name."
                label="Name"
                horizontal
                autocomplete="name"
                v-model="newUser.full_name"
              />
              <CInput
                label="Login"
                placeholder="Username"
                horizontal
                v-model="newUser.login"
              />
              <CInput
                label="Email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
                v-model="newUser.email"
              />
                <CRow form class="form-group">
                  <CCol tag="label" sm="3" class="col-form-label">
                    Role
                  </CCol>
                  <CCol sm="9" >
                    <!-- <CInputCheckbox
                      v-for="(option, optionIndex) in options"
                      :key="optionIndex"
                      :checked="true"
                      :label="options[optionIndex].label"
                      :value="options[optionIndex].value"
                    >
                    </CInputCheckbox> -->
                    <input type="checkbox" id="admin" value="64390598-8bbb-4354-8551-f475f1f4cee8" v-model="newUser.roles">
                    <label for="admin">Admin</label>
                    <input type="checkbox" id="user" value="ec361f3d-c7e0-4a52-a90e-4ecee7d56c1b" v-model="newUser.roles">
                    <label for="user">User</label>
                  </CCol>
                </CRow>
            </CForm>
          </CCardBody>
          <CCardFooter >
            <CButton   color="primary" :pressed.sync="togglePress" @click="submit()">Submit</CButton>
            <CButton style="margin-left: 20px"  color="danger" :pressed.sync="togglePress">Reset</CButton>
          </CCardFooter>
        </CCard>
            <CButton block color="primary" @click="goBack">Back</CButton>
      </CCol>
    </CRow>
</template>
<script>
import {API_WITH_HEADER} from '../../utils/axiosConfig 2'

export default {
  name: 'AddUser',
  data () {
    return {
      newUser: {
        email: '',
        full_name: '',
        login: '',
        roles: []
      },
      horizontal: { label:'col-3', input:'col-9' },
      options: [
        {
          value: 'admin', 
          label: 'Admin'
        }, 
        {
          value: 'user', 
          label: 'User'
        }
      ],
      formCollapsed: true,
      togglePress: false,
      color: "",
      message: "",
      currentAlertCounter: 0

    }
  },
  methods: {
    clearInputs(){
      const user = this.newUser
      user.email = '';
      user.full_name = '';
      user.login = '';
      user.roles = [];
    },
     submit(){
      let formData = JSON.stringify(this.newUser);
      console.log(formData)
       API_WITH_HEADER.post("/admin/user/create", formData)
        .then((response) => {
          if(response.data.has_error == false){
            this.color = "success"
            this.message = "Создание пользователя прошло успешно"
            this.currentAlertCounter = 5;
            this.clearInputs();
            }
        })
        .catch(err => {
          let error = err.response.data
          this.color = "danger"
          this.message = error.error_text
          this.currentAlertCounter = 5;
        })
        
      
    },
    goBack() { // Возврат назад ко всем пользователям
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    }
  }
}
</script>