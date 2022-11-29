<template>
  <div class="col-3 mt-3">
    <v-card>
        
    
    <div class="card h-100 text-left">
      <img class="w-100" width="150px" height="150px" :src="datalist.profile_image_url" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{name: '/home', params: {id: datalist.id}}">{{ datalist.name }}</router-link>
        </h4>
        <strong>${{ datalist.rating }}</strong>
        <p class="card-text">{{ datalist.address }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" >Add to Cart</button>
      </div>
    </div>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ["datalist"]
}
</script>