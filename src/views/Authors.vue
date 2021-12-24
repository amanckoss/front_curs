<template>
  <v-container>
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
            Add author
          </v-btn>
        </v-col>
        <v-col>
          <v-data-table
              @click:row="handleClick"
              :headers="headers"
              :items="authors"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import AuthorService from "../services/AuthorService";
import router from '../router/index.js'

export default {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name'},
        { text: 'Surname', value: 'surname' }
      ],
      authors: []
    }
  },
  methods: {
    getAuthors(){
      AuthorService.getAuthors().then((response) => {
        this.authors = response.data
      });
    },
    handleClick(author) {
      router.push({
        path: "/edit",
        props: { a: author }
      })
    },
  },
  created() {
    this.getAuthors();
  },
}
</script>

<style scoped>

</style>