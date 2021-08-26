<template>
  <CRow>
    <CCol col="14" xl="10">
      <CCard>
        <CCardHeader>
          User
        </CCardHeader>
        <CCardBody>
          <!-- 
            CDataTable - строит таблицу

            props:
              1. items - место в котором хранятся все пользователи
              2. fields -  Поля пользователей
              3. items-per-page - Количество элементов в таблице
              4. clickable-rows - Возможность нажимать на строки и куда то переходить наверно
              5. :active-page="activePage" - Текущая страница
              6. @row-clicked="rowClicked" - Свойство строки, если включено то происходит какое то событие по клику на строку, здесь вызывается метод rowClicked
              7. pagination="{ doubleArrows: false, align: 'center'}" - пагинация и ее стили
              8. @page-change="pageChange" - изменение страницы в пагинации
           -->
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="5" 
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
          
        </CCardBody>
        
      </CCard>
      <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" @click="addUser">Add user</CButton>
          </CCol>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  data () {
    return {
      items: usersData, // usersData - файл в котором хранятся все пользователи, надо будет каким-то образом подтягивать с сервера
      fields: [ // Поля пользователей
        { key: 'username', label: 'Name', _classes: 'font-weight-bold' },
        { key: 'registered' },
        { key: 'role' },
        { key: 'status' }
      ],
      activePage: 1
    }
  },
  watch: { // При изменении данных в watch происходит выполнение действий в ней описанные 
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    getBadge (status) { // Метод который присваивает цвет статусу
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) { // Переход на опредленного пользователя по клику на строку
      this.$router.push({path: `users/${index + 1}`})
      console.log('this.$router', index)
    },
    pageChange (val) { // Смена страницы 
      this.$router.push({ query: { page: val }})
    },
    addUser(index) {
      this.$router.push({path: `users/AddUser`})
      console.log('this.$router', this.$router)
    }
  }
}
</script>
