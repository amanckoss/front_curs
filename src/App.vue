<template>
  <v-app
      id="inspire"
  >
    <v-app-bar
        app
        color="orange"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          background-color="transparent"
          color="white"
          fixed-tabs
      >
        <v-tab
            v-for="link in links"
            :key="link.id"
            :to="link.route"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-parallax
        src="@/assets/background.png"
        height="600"
    >
      <router-view tab="tab"></router-view>
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
      return id
    }
  },
}
</script>

<style>
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>