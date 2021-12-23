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
            Add user
          </v-btn>
        </v-col>
        <v-col>
          <v-simple-table
              fixed-header
              height="350px"

          >
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Surname
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in desserts"
                  :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>