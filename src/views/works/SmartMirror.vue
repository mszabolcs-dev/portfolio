<template>
  <v-container fill-height>
  <v-row>
    <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          class="ml-6 mr-6 grey darken-4 white--text"
        >
        <h3>Smart Mirror - User Management Web Application</h3>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          class="ml-6 mr-6 grey darken-4 white--text"
        >
        <p>
          • Created a website in Node.js for the smart mirror project.<br>
          • Designed the default welcoming page and description page about the project.<br>
          • Created the backend for user registration and logins.<br>
          • After login you can see the status of the mirror and you can manage user and mirror settings<br>
          • The backend talks to a database and capable of uploading images from the users.<br>
          • The mirror and the website connected to a central database (MSSQL)<br>
          • Used Git in order to manage source codes, branched, projects and tasks.<br>
        </p>
        </v-row>
      </v-col>

      <v-col cols="12">

        <v-row
          align="center"
          justify="center"
          class="ml-6 mr-6 grey darken-4 white--text"
        >

      <v-fade-transition mode="out-in">
      <v-row class="ml-5 mr-5">
        <v-col cols="6">
          
            <v-img
              src="../../assets/smart_mirror/login.png"
              class="grey darken-4"
              width="700px"
              contain
            >
            </v-img>
          
        </v-col>

        <v-col cols="6">
            <v-img
              src="../../assets/smart_mirror/sign_up.png"
              class="grey darken-4"
              width="700px"
            ></v-img>
        </v-col>

        <v-col cols="6">
            <v-img
              src="../../assets/smart_mirror/user_settings.png"
              class="grey darken-4"
              width="700px"
            ></v-img>
        </v-col>

        <v-col cols="6">
            <v-img
              src="../../assets/smart_mirror/mirror_settings.png"  
              class="grey darken-4"
              width="700px"
            ></v-img>
        </v-col>
      </v-row>
    </v-fade-transition>
        </v-row>
      </v-col>
    
  </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
};
</script>