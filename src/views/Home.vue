
<template>
  <v-container fluid>
    <v-data-iterator
      :items="dataCardList"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        

          <v-col cols="12" md="5" class="pt-0 pb-1 d-flex justify-md-end">
              <h1>Place List</h1>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            outlined
            solo
            style="max-width: 250px"
            dense
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="justify-space-around"
            
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              style="max-width: 250px"
              solo
              outlined
              dense
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Restaurent"
            ></v-select>
            <v-spacer></v-spacer>
          </template>
          </v-col>
      
      </template>

      <template v-slot:default="dataCardList">
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
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                 <img
                  :src="item.profile_image_url"
                  height="60px"
                  class="image-border"
                />
               
                <!-- <span class="pl-3">{{ item.name }} </span> -->
                <router-link :to="{ name: 'detail', params: {id: item.id }}"><span class="pl-3">{{ item.name }} </span></router-link>
                <v-list-item-title class="pt-2"
                    ><v-icon>mdi-calendar</v-icon
                    >{{ item.operation_time[0].time_open }} AM -
                    {{
                      item.operation_time[0].time_close
                    }}
                    PM  <v-icon color="warning"> mdi-star</v-icon>  {{ item.rating}}</v-list-item-title
                  >
              
              </v-card-title>
              <v-row >
              <v-col cols="6" sm="4" xs> 
                  <img :src="item.images[0]"  class="image-border-slide" />
              </v-col>
              <v-col cols="6" sm="4" > 
                  <img :src="item.images[1]" class="image-border-slide" />
              </v-col>
              <v-col cols="6" sm="4" > 
                  <img :src="item.images[2]" class="image-border-slide" />
              </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
// import DataCard from "../cards/dataCard"
import Axios from "axios";
// import api from "@/services/api";
export default {
  data() {
    return {
      // datalist: {}
      // dataLists: [],
      itemsPerPageArray: [3, 6, 9],
      search: "",
      filter: {},
      // datalist:[],
      sortDesc: false,
      page: 1,

      itemsPerPage: 9,
      sortBy: "name",
      keys: [
        "restaurant",
        "cafe",
        "bakery",
      ],
      dataCardList: [],
      dataCardListTime: [],
    };
  },
  components: {
    // DataCard,
  },

  mounted() {
    // this.$store.dispatch("getdataList");
    Axios.get("http://localhost:8081/api/v2/datalist").then((response) => {
      console.log(JSON.stringify(response.data));
      this.dataCardList = response.data;
      // this.dataCardListTime = response.data

      console.log(response.data);
    });

    // let data = api.getDataList();
    // this.dataCardList = data.data
  },
  computed: {
    // dataLists() {
    //   return this.$store.state.datalist
    // },
    numberOfPages() {
      return Math.ceil(this.dataCardList.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    //  detail(item){
    //   this.$router.push(`/detail/${item.id}`) 
    // },
    ToDetail(){
      this.$store.dispatch('gotoDetail'), {
        dataCardList : this.item.id
      }
    }
  },
};
</script>


<style >
.image-border {
  width: 60px;
  height: 60px;
  left: 589px;
  top: 157px;
  /* padding-right: 5px; */

  border-radius: 10px;
}

.image-border-slide {
  width: 110px;
  height: 110px;
  left: 829px;
  top: 228px;
   border-radius: 10px;
}
/* .text-field{
  background: #FFFFFF;
border: 1px solid #134B8A;
border-radius: 50px;
box-sizing: border-box;
} */
</style>


