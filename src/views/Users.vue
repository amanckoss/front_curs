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
              :headers="headers"
              :items="tableData"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {text: 'Name', value: 'name'},
        { text: 'Surname', value: 'surname' },
        { text: 'Email', value: 'email' },
      ],
      tableData: [
        {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
          {
          name: 'Frozen Yogurt',
          surname: 159,
          email: 'dkjfslk@gmail.com',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>