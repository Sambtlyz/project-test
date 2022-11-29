<template>
  <div>
    <v-app-bar app color="primary" dense dark height="60">
      <v-spacer></v-spacer>
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="primary" size="30">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="primary">
                <v-icon dark> mdi-account-circle </v-icon>
              </v-avatar>
              
              <v-divider class="my-3"></v-divider>
              <v-divider class="my-3"></v-divider>

              <v-btn depressed rounded text>
                LOGOUT <v-icon>mdi-logout</v-icon>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "Header",
  computed: {
   
  },
  data() {
    return {
   mini: true
    };
  },

};
</script>

<style>

</style>
