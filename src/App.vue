<template>
<v-app >
  
  <Header />
  <!-- <Content/>   -->
  <Menu />
  <Footer />
</v-app>
  
</template>

<script>
import Menu from "@/components/Menu.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
// import Content from '@/components/Content.vue';
export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Menu,
    Header,
    Footer
    // Content,
  }
};
</script>


<style>
#app {
  font-family: 'Kanit', sans-serif;
  background-color: #e9edf2;
  
}
</style>
