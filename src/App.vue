<template>
  <v-app>
    <v-main class="grey darken-4 white--text">
      <Toolbar/>
      <router-view/>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
export default {
  components: {
    Toolbar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
