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
            Add Books
          </v-btn>
        </v-col>
        <v-col>
          <v-data-table
              @click:row="handleClick"
              :headers="headers"
              :items="books"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>


<script>
import BookService from "../services/BookService";

export default {
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name'},
        { text: 'Author', value: 'author' }
      ],
      books: []
    }
  },
  methods: {
    getBooks(){
      BookService.getBooks().then((response) => {
        console.log(response.data[0].name)
        this.books = response.data
      });
    },
    handleClick(value) {
      console.log(value.name);
    }
  },
  created() {
    this.getBooks();
  },
}
</script>

<style scoped>

</style>