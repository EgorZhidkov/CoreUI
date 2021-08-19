<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          User id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'User',
  beforeRouteEnter(to, from, next) { // Хз что это
    next(vm => {
      vm.usersOpened = from.fullPath.includes('users')
    })
  },
  data () {
    return {
      usersOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () { // Возвращает всю информацию о конкретном пользователе по ID в формате { key, value } 
      const id = this.$route.params.id // Id нужного пользователя
      const user = usersData.find((user, index) => index + 1 == id) // User - переменная в которйо хранится определенный пользователь по его ID
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']] //Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
      return userDetails.map(([key, value]) => { return { key, value } }) 
    },
    visibleData () { // Возвращает все данные о пользователе в формате {"key": "value"}, кроме username
      return this.userData.filter(param => param.key !== 'username')
    },
    username () { // Возвращает только username в формате value
      return this.userData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() { // Возврат назад ко всем пользователям
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    }
  }
}
</script>
