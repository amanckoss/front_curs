<template>
  <v-container>
    <v-row
        justify="center">
      <v-sheet
          min-width="100vh"
          rounded="lg"
      >
        <template v-if="tabValue === 1">
          <v-col
              align="center"
          >
            <div class="mb-1 text-center py-1">New User</div>
            <v-text-field v-model="user_name"
                label="Name"
                placeholder="Enter name"
            ></v-text-field>

            <v-text-field  v-model="user_surname"
                label="Surname"
                placeholder="Enter surname"
            ></v-text-field>

            <v-text-field  v-model="user_username"
                           label="Username"
                           placeholder="Enter username"
            ></v-text-field>

            <v-text-field  v-model="user_email"
                label="Email"
                placeholder="Enter email"
            ></v-text-field>

            <v-text-field  v-model="user_password"
                           label="Password"
                           placeholder="Enter password"
            ></v-text-field>

          </v-col>

          <v-col align="center">
            <v-btn v-on:click="new_user">
              Ok
            </v-btn>
          </v-col>
        </template>
        <template v-if="tabValue === 2">
          <v-col
              align="center"
          >
            <div class="mb-1 text-center py-1">New Book</div>
            <v-text-field v-model="book_name"
                label="Name"
                placeholder="Enter name"
            ></v-text-field>

            <v-text-field v-model="book_author"
                label="Author"
                placeholder="Enter author"
            ></v-text-field>
          </v-col>

          <v-col align="center">
            <v-btn  v-on:click="new_book">
              Ok
            </v-btn>
          </v-col>
        </template>
        <template v-if="tabValue === 3">
          <v-col
              align="center"
          >
            <div class="mb-1 text-center py-1">New Author</div>
            <v-text-field
                label="Name"
                placeholder="Enter name"
            ></v-text-field>

            <v-text-field
                label="Surname"
                placeholder="Enter surname"
            ></v-text-field>
          </v-col>

          <v-col align="center">
            <v-btn>
              Ok
            </v-btn>
          </v-col>
        </template>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>

import UserService from '../services/UserService';
import BookService from '../services/BookService';

export default {
  name: "Add",
  props: {
    tabValue: Number
  },
  data(){
    return{
      user_name: this.route.params.user.user_name,
      user_surname: "",
      user_email: "",
      user_username: "",
      user_password: "",

      book_name: "",
      book_author: ""
    }
  },
  methods: {
    new_user(){
      console.log(this.user_name);
      UserService.postUser({
        name: this.user_name,
        surname: this.user_surname,
        email: this.user_email,
        username: this.user_username,
        password: this.user_password
      }
      )
    },
    new_book(){
      console.log(this.user_name);
      BookService.postBook({
            name: this.book_name,
            author: this.book_author
          }
      )
    }
  }
}
</script>

<style scoped>
/deep/ .v-text-field{
  width: 400px;
}

</style>