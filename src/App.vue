<template>
  <v-app
      id="inspire"
  >
    <v-app-bar
        app
        flat
    >

      <v-tabs
          background-color="transparent"
          fixed-tabs
      >
        <v-tab
            v-for="link in links"
            :key="link.id"
            :to="link.route"
            @click="setBarId(link.id)"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-btn
          icon
          to="/home"
      ><v-avatar
            :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
            size="32"
        ><img src="https://tlgrm.ru/_/stickers/2b7/ff8/2b7ff812-f294-4447-9145-95fd518167ca/1.jpg">
        </v-avatar>
      </v-btn>

    </v-app-bar>

    <v-parallax
        src="@/assets/background.png"
        height="600"
    >
      <router-view :tab-value="tab"></router-view>
    </v-parallax>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      links: [
        {
          id: 0,
          name: 'Home',
          route: '/home',
        },
        {
          id: 1,
          name: 'Users',
          route: '/users',
        }, {
          id: 2,
          name: 'Books',
          route: '/books'
        }, {
          id: 3,
          name: 'Authors',
          route: '/authors'
        },
      ],
    }
  },
  methods: {
    setBarId(id) {
      this.tab = id
    }
  },
}
</script>

<style>

</style>