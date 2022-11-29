<template>
  <v-data-iterator
      :items="dataCardList"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
     
      :sort-desc="sortDesc"
      hide-default-footer
    >
    <template v-slot:default="dataCardList">
      <v-row class="pa-3">
        <v-btn color="primary" @click="$router.back('/home')">BACK</v-btn>
      </v-row>
      
        <v-row>
          <v-col
            v-for="item in dataCardList.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <!-- <v-col
           v-for="datalist in dataCardList" :key="datalist.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          > -->
            <v-card max-width="600px" height="600">
              <v-card-title class="subheading font-weight-bold">
                 <img
                  :src="item.profile_image_url"
                  height="300px"
                  width="300px"
                />
               
                <v-row class="pt-3 pl-2">
                  <v-col>
                  <span >{{ item.name }} <v-icon color="warning"> mdi-star</v-icon>  {{ item.rating}} </span>
                  </v-col>
                </v-row>
                
                
  
        
              
              </v-card-title>
               
               <h3 class="subheading font-weight-bold pl-5">Address : </h3>
               <h5 class="pl-5"> {{ item.address}}</h5> 
               
                 <h3 class="subheading font-weight-bold pl-5">Opening Hour : </h3>
               <h5 class="pl-5"> 
                {{ item.operation_time[0].day}} 
                {{ item.operation_time[0].time_open}} AM - {{ item.operation_time[0].time_close}} PM
               
               </h5> 
                <h5 class="pl-5"> 
                {{ item.operation_time[1].day}} 
                {{ item.operation_time[1].time_open}} AM - {{ item.operation_time[1].time_close}} PM
               
               </h5> 
                <h5 class="pl-5"> 
                {{ item.operation_time[2].day}} 
                {{ item.operation_time[2].time_open}} AM - {{ item.operation_time[2].time_close}} PM
               
               </h5> 
               
            </v-card>
          </v-col>
        </v-row>
      </template>
  </v-data-iterator>
</template>

<script>
import Axios from "axios";
export default {
    data() {
    return {
      dataCardList: [],
    };
  },
  // props: ["id"],
  mounted() {
    Axios.get("http://localhost:8081/api/v2/datalist").then((response) => {
      console.log(JSON.stringify(response.data));
      this.dataCardList = response.data;
      console.log(response.data);
    });
  },

};
</script>

<style>
</style>
