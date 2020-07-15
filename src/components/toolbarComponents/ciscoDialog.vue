<template>
  <v-dialog v-model="dialog" max-width="1500px">
  <template #activator="{ on }">
    <v-list-item
      v-on="on"              
    >
      <v-list-item-content>
        <v-list-item-title
          color="primary"
          dark
          v-text="certInfo.name">
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </template>
  
  <v-card v-if="dialog">
    <v-card-title>
      <span class="headline">{{ certInfo.name }} Certificate and Letter</span>
      <v-spacer></v-spacer>
      <v-card-actions class="pb-1">
        <v-btn outlined fab small color="cyan">
          <v-icon color="cyan" @click="dialog = false">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-card-text>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-card-title>
            Certificate
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-img @click="openFile()" :src="certInfo.certName"></v-img>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card>
          <v-card-title>
            Letter
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-img @click="openFile()" :src="certInfo.letterName"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
</v-dialog>
</template>

<script>
//import pdf from 'vue-pdf'
export default {
  name:'ciscoDialog',
  props: {
    certInfo: {
      type: Object
    }
  },
  components: {
    //pdf
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    openFile() {
      window.open('','_blank')
    },
  }
}
</script>

<style>

</style>