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
      imText: 'I\'m a dual student working at IBM at my last semester. Developed a couple of websites and applications outside of the organisation. If you want to know more about me click at About Me at the top or if you want to see my previous works click at Works.'
    }),

  methods: {
    callColor() {
      
    }
  }
  }
</script>
