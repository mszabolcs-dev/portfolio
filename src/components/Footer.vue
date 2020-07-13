<template>
  <v-footer
    padless
    app
    :inset="true"
  >
    <v-card
      class="flex cyan"
      flat
      tile
    >

      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Szabolcs Mészáros</strong>
      </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </v-footer>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
    text: 'Hello, I\'m a snackbar',
  })
}
</script>