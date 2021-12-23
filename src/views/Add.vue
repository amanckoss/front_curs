<template>
  <v-container>
    <template v-if="tab == 1">
      <v-col
          align="center">

        <v-sheet
            min-height="70vh"
            rounded="lg">
          <div class="mb-2">
            Font
          </div>

          <v-col
              cols="12"
              sm="6"
          >
            <v-text-field
                label="Regular"
                placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
          >
            <v-text-field
                label="Regular"
                placeholder="Placeholder"
            ></v-text-field>
          </v-col>
          <v-btn block>
            Block Button
          </v-btn>
        </v-sheet>
      </v-col>
    </template>
    <template v-if="tab == 2">

    </template>
    <template v-if="tab == 3">

    </template>
  </v-container>
</template>

<script>
export default {
  name: "Add",
  props: ['tab']
}
</script>

<style scoped>

</style>