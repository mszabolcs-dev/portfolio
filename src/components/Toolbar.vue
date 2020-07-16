<template>
  <nav>
      <v-app-bar
        class="cyan"
        app
        dense
      >
        <!-- <v-app-bar-nav-icon @click="setDrawerStatus"></v-app-bar-nav-icon> -->
        <router-link to="/"><v-toolbar-title :class="colorChangingClass" class="mr-10">Portfolio</v-toolbar-title></router-link>



        <v-btn :class="colorChangingClass" text @click="navigateTo('/about')">About Me</v-btn>
        <v-btn :class="colorChangingClass" text @click="drawerStatus=!drawer">Works</v-btn>

        <v-spacer></v-spacer>
        
        <a href="http://amk.uni-obuda.hu/" target="_blank">
          <v-btn icon>
              <v-icon>mdi-school</v-icon>
          </v-btn>
        </a>
        <a href="https://www.linkedin.com/in/szabolcs-m%C3%A9sz%C3%A1ros-93b693147/" target="_blank">
        <v-btn icon>
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        </a>
        <a href="https://github.com/gartou" target="_blank">
        <v-btn icon>
            <v-icon>mdi-github</v-icon>
        </v-btn>
        </a>
        <a href="https://gitlab.com/gartou" target="_blank">
        <v-btn icon>
            <v-icon>mdi-gitlab</v-icon>
        </v-btn>
        </a>

      </v-app-bar>

      <v-navigation-drawer
        disable-resize-watcher
        v-model="drawerStatus"
        app
        permament
        class="cyan"
        width="300px"
      >
        <v-list-item>
          <v-list-item-content>
            
            <v-list-item-title class="title">
              {{ workDisplayed }}
              <v-divider></v-divider>
            </v-list-item-title>

            <router-link to="/dusty">
              <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>Dusty</v-list-item-title>
                <v-list-item-subtitle>A discord bot with website</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/thisWebsite">
            <v-list-item
                link
              >

              <v-list-item-content>
                <v-list-item-title>This Website</v-list-item-title>
                <v-list-item-subtitle>Vue.js frontend</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/smartMirror">
            <v-list-item
                link
              >
              <v-list-item-content>
                <v-list-item-title>Smart Mirror Website</v-list-item-title>
                <v-list-item-subtitle>Full-Stack Development</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          
            <v-list-item-title class="title">
              <v-divider></v-divider>
              Certificates
              <v-divider></v-divider>
            </v-list-item-title>


          <v-list-item-title class="mt-5 ml-3">
            <v-divider></v-divider>
              CCNA R&S
            <v-divider></v-divider>
            </v-list-item-title>

            <cisco-dialog v-for="item in certCiscoItems" :key="item.name" :certInfo="item"></cisco-dialog>
            

          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>

  </nav>
</template>

<script>
import ciscoDialog from './toolbarComponents/ciscoDialog'
export default {
  name: 'toolbar',
  components: {
    ciscoDialog
  },
  data() {
      return {
        drawer: this.$store.state.drawerStatus,
        workDisplayed: "Previous Works",
        colorChangingClass: "black--text",
        colors: ["red--text", "red darken-4--text", "pink lighten-1--text", "purple darken-3", "deep-purple darken-2", "indigo lighten-1", "blue darken-3", "light-blue darken-1", "cyan lighten-1", "green--text darken-1"],
        dialog: false,
        networkCertPath: '@/assets/network/cert',
        networkLetterPath: '../assets/network/letter/',
        certCiscoItems: [
          {
            name:'Introduction to Networks',
            certName: require('@/assets/network/cert/imgs/introCertificate.jpg'),
            letterName: require('@/assets/network/letter/imgs/introdLetter.jpg'),
            pdfCert: 'network/cert/SzabolcsMeszaros-Introd-certificate.pdf',
            pdfLetter: 'network/letter/SzabolcsMeszaros-Introd-letter.pdf'
          },
          {
            name:'Connecting Networks',
            certName: require('@/assets/network/cert/imgs/connCertificate.jpg'),
            letterName: require('@/assets/network/letter/imgs/connLetter.jpg'),
            pdfCert: 'network/cert/SzabolcsMeszaros-Conn-certificate.pdf',
            pdfLetter: 'network/letter/SzabolcsMeszaros-Conn-letter.pdf'
          },
          {
            name:'Scaling Networks',
            certName: require('@/assets/network/cert/imgs/scalingCertificate.jpg'),
            letterName: require('@/assets/network/letter/imgs/scalingLetter.jpg'),
            pdfCert: 'network/cert/SzabolcsMeszaros-Scaling-certificate.pdf',
            pdfLetter: 'network/letter/SzabolcsMeszaros-Scaling-letter.pdf'
          },
          {
            name:'Routing and Switching Essentials',
            certName: require('@/assets/network/cert/imgs/routingNSwitchingCertificate.jpg'),
            letterName: require('@/assets/network/letter/imgs/routingNSwitchingLetter.jpg'),
            pdfCert: 'network/cert/SzabolcsMeszaros-Routing-certificate.pdf',
            pdfLetter: 'network/letter/SzabolcsMeszaros-Routing-letter.pdf'
          },

        ]
      }
  },
  methods: {
    navigateTo (route) {
      // eslint-disable-next-line 
      this.$router.push(route).catch(err => {})
    },
    openFile() {
      window.open('','_blank')
    },
    returnImg(item) {
      console.log(`${this.networkCertPath}imgs/${item.cert_name}.jpg`)
      return require(`../assets/network/cert/imgs/${item.cert_name}.jpg`)
    }
  },
  computed: {
    drawerStatus: {
      get() {
        return this.$store.state.drawerStatus
      },
      set(status) {
        this.$store.dispatch('setDrawerStatus',status)
        this.drawer = status
      }
    }
  }
    
}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>