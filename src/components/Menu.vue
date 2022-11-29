<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      height="1456px"
      permanent
      color="#ffffff"
      class="sidebar"
    >
      <v-list-item class="px-2">
        <!-- <v-list-item-avatar>
          <v-img src="../assets/images/logo1.jpg" />
        </v-list-item-avatar> -->

        <!-- <v-btn icon @click.stop="mini = !mini" color="blue-grey lighten-5">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->

        <v-img
          src="../assets/images/logo1.jpg"
          size="60px"
          width="60px"
        ></v-img>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="mini = !mini" color="primary">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <!-- <v-list-item class="mb-1 px-2">
        <v-list-item-icon>
          <v-btn icon @click.stop="mini = !mini" color="blue-grey lighten-5">
              <v-app-bar-nav-icon ></v-app-bar-nav-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item> -->

      <v-divider color="#f5f5f5"></v-divider>

      <v-list dense>
        <v-list-item
          class="SelectedTile"
          active-class="SelectedTile-active"
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon color="primary">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content color="blue-grey lighten-5">
            <v-list-item-title class="ListItemClass">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mini: true,
      drawer: true,
      selectedItem: 0,
      items: [{ title: "Place List", icon: "mdi-home", path: "/" }],
    };
  },
};
</script>

<style scoped>
.ListItemClass {
  color: #000000;
}

.SelectedTile:hover {
  border-radius: 4px;
  background: #455a64;
}

.SelectedTile-active {
  border-radius: 4px;
  background: rgba(10, 204, 117, 0.19);
}

.sidebar {
  border-bottom-right-radius: 60px;
 
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}


/* .sidebar {
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: #FFFFFF;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
border-radius: 0px 50px 50px 0px;
} */
</style>