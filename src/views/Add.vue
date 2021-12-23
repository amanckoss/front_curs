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
            <v-text-field
                label="Name"
                placeholder="Enter name"
            ></v-text-field>

            <v-text-field
                label="Surname"
                placeholder="Enter surname"
            ></v-text-field>

            <v-text-field
                label="Email"
                placeholder="Enter email"
            ></v-text-field>
          </v-col>

          <v-col align="center">
            <v-btn>
              Ok
            </v-btn>
          </v-col>
        </template>
        <template v-if="tabValue === 2">
          <v-col
              align="center"
          >
            <div class="mb-1 text-center py-1">New Book</div>
            <v-text-field
                label="Name"
                placeholder="Enter name"
            ></v-text-field>

            <v-text-field
                label="Author"
                placeholder="Enter author"
            ></v-text-field>
          </v-col>

          <v-col align="center">
            <v-btn>
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
export default {
  name: "Add",
  props: {
    tabValue: Number
  }
}
</script>

<style scoped>
/deep/ .v-text-field{
  width: 400px;
}

</style>