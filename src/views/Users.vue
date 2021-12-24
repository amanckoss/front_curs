<template>
  <v-container >
    <v-row
        justify="center"
    >
      <v-sheet
          min-width="100vh"
          rounded="lg">
        <v-col>
          <v-btn
              block
              class="text-center py-3"
              to="/add"
          >
            Add user
          </v-btn>
        </v-col>
        <v-col>
          <v-data-table
              @click:row="handleClick"
              :headers="headers"
              :items="users"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>

import UserService from '../services/UserService';
import router from '../router/index.js'


export default {
  data () {
    return {
      headers: [
        {text: 'Name', value: 'name'},
        { text: 'Surname', value: 'surname' },
        { text: 'Email', value: 'email' },
      ],
      users: []
    }
  },
  methods: {
    getUsers(){
      UserService.getUsers().then((response) => {
        console.log(response.data[0].name)
        this.users = response.data
      });
    },
    handleClick(user) {
      console.log(user);
      router.push({
        path: "/add",
        params: { user }
      })
    },
  },
  created() {
    this.getUsers();
  },
}
</script>

<style scoped>

</style>