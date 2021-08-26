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
              />
              <CInput
                label="Login"
                placeholder="Username"
                horizontal
              />
              <CInput
                label="Email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              
              <CSelect
                label="Role"
                horizontal
                :options="options"
                placeholder="Please select role"
              />
              
            </CForm>
          </CCardBody>
          <CCardFooter >
            <CButton   color="primary" :pressed.sync="togglePress">Submit</CButton>
            <CButton style="margin-left: 20px"  color="danger" :pressed.sync="togglePress">Reset</CButton>

              <!-- <CRow>
                <CCol >
                    <CButton col="2" class="mb-3 mb-xl-0 text-center" variant="outline" color="primary" :pressed.sync="togglePress">Submit</CButton>
                </CCol>
                <CCol>
                    <CButton col="2" class="mb-3 mb-xl-0 text-center" variant="outline" color="danger" :pressed.sync="togglePress">Reset</CButton>
                </CCol>
            </CRow> -->
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
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Admin', 'User'],
      selectOptions: [
        'Admin', 'User',
        { 
          value: 'some value', 
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',
      formCollapsed: true,
      togglePress: false,
    }
  },
  methods: {
    // validator (val) {
    //   return val ? val.length >= 4 : false
    // },
    goBack() { // Возврат назад ко всем пользователям
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    }
  }
}
</script>