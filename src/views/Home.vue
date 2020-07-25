<template>
<v-container fluid>
  <v-row class="ml-5 mr-5">
    <v-col cols="12">
      <v-row
        align="center"
        justify="center"
        >
        <v-card tile>
          <vue-typed-js :typeSpeed="20" :loop="false" :cursorChar="'_'" :strings="['Boss', 'Friend', 'Interviewer']">
            <h1>Hello <span class="typing"></span></h1>
          </vue-typed-js>
        </v-card>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="mt-8"
        >
        <v-card tile>
          <vue-typed-js :typeSpeed="30" :strings="['Your are looking at my beautiful page. Thanks for coming by.']">
            <h2 class="typing"></h2>
          </vue-typed-js>
        </v-card>
      </v-row>

      <v-row
        align="center"
        justify="center"
        class="mt-8"
        >
        <v-card tile>
          <vue-typed-js @onComplete="callColor()" :typeSpeed="40" :strings="['I\'m a dual student working at IBM at my last semester. Developed a couple of websites and applications outside of the organisation. If you want to know more about me click at About Me at the top or if you want to see my previous works click at Works.']">
            <h2 class="typing"></h2>
          </vue-typed-js>
        </v-card>
      </v-row>

      <v-row align="center" justify="center" class="mt-8">
        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            height="500px"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">OVERLINE</div>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            height="500px"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">My previous works</v-list-item-title>
                <div class="overline mb-1">Most of them are in a git repo</div>
                <v-list-item-subtitle>like...</v-list-item-subtitle>
                
                <v-card max-width="160" class="black">
                  <v-list-item>
                    <v-list-item-avatar><v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/GitHub-Mark-Light.png"></v-img></v-list-item-avatar>
                    <div class="white--text font-weight-bold headline">GitHub</div>
                  </v-list-item>
                </v-card>


                <v-btn @click="openURL('https://github.com/gartou')" class="mb-3 mt-3" style="background: black;" height="45px" max-width="300px"> <!-- #7289da -->
                  <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/GitHub-Mark-Light.png"></v-img>
                  <v-img contain height="35px" width="35px" src="../assets/icons/GitHub_Logo_White.png"></v-img>
                  <span class="ml-3 mr-1 white--text">Gartou</span>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn @click="openURL('https://github.com/gartou')" class="mb-3 mt-3" style="background: white;" height="45px" max-width="300px"> <!-- #7289da -->
                  <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/gitlab-logo-gray-rgb.png"></v-img>
                  <span class="ml-3 mr-1 grey--text">Gartou</span>
                </v-btn>

                <v-spacer></v-spacer>

              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            height="400px"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">How can you contact me?</v-list-item-title>
                <div class="overline mb-1">There's plenty way...</div>
                <v-list-item-subtitle>like...</v-list-item-subtitle>

                <v-btn @click="openURL('https://discord.com/channels/@me/226777778551390208')" class="mb-3 mt-3" style="background: #7289da;" height="45px" max-width="170px"> <!-- #7289da -->
                  <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/discord_icon_white.png"></v-img>
                  <span class="ml-3 mr-1 white--text">Gartou#6911</span>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn @click="openURL('https://t.me/gartou')" class="mb-3 mt-3 grey darken-3" height="45px" max-width="170px"> <!-- #7289da -->
                    <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/telegram_icon.png"></v-img>
                    <span class="ml-3 mr-9 white--text">@Gartou</span>
                </v-btn>

                <v-spacer></v-spacer>


                <v-btn :href="`mailto:${protonMail}`" class="mb-3 mt-3" style="background-color: #8a90c7;" height="45px" max-width="170px"> <!-- #7289da -->
                    <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/protonmail-sign-dark.png"></v-img>
                    <span class="ml-4 mr-2 white--text">szabolcsm@</span>                
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :href="`mailto:${outlook}`" class="mb-3 mt-3" style="background-color: #8a90c7;" height="45px" max-width="170px"> <!-- #7289da -->
                    <v-img class="icon_rotate" contain height="35px" width="35px" src="../assets/icons/outlook_icon.png"></v-img>
                    <span class="ml-4 mr-2 white--text">mszabolcs@</span>                
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

      </v-row>   
    </v-col>
  </v-row>



  <v-row>

  </v-row>
</v-container>

</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

export default {
    data: () => ({
      alignment: 'center',
      justify: 'center',
      imText: 'I\'m a dual student working at IBM at my last semester. Developed a couple of websites and applications outside of the organisation. If you want to know more about me click at About Me at the top or if you want to see my previous works click at Works.',
      protonMail: 'szabolcsm@protonmail.com',
      outlook: 'mszabolcs@outlook.com'
    }),

  methods: {
    openURL(url) {
       window.open(url,'_blank')
    },
    callColor() {
      
    }
  }
  }
</script>

<style scoped>
.icon_rotate {
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
          transition: transform 0.8s ease-in-out;
}

.icon_rotate:hover {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
</style>