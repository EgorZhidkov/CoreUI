<template>
   <CRow>
      <CCol md="6">
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
              
              <!-- <CSelect
                label="Role"
                horizontal
                :options="options"
                placeholder="Please select role"
              /> -->

              
              <!-- <template v-for="(name, key) in checkboxNames"> -->
                <CRow form class="form-group" :key="name">
                  <CCol tag="label" sm="3" class="col-form-label">
                    <!-- {{name}} -->
                    Role
                  </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputCheckbox
                      v-for="(option, optionIndex) in options"
                      :key="key + option"
                      :label="option"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                      :inline="key % 2 === 1"
                    />
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
export default {
  name: 'AddUser',
  data () {
    return {
      newUser: {
        full_name: '',
        login: '',
        email: '',
        role: ''
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
    }
  },
  methods: {
    submit(){
      const formData = this.newUser;
      console.log(formData)
    },
    goBack() { // Возврат назад ко всем пользователям
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    }
  }
}
</script>