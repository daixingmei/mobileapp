<template>
  <div class="home">
    <Slide></Slide>
    <div class="content">
      <ul>
        <li v-for="(list,index) in lists">
          <router-link :to="'/sub/'+list.id">
             <h2>{{list.title}}</h2>
             <p>{{list.detail}}</p>
          </router-link> 
          
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Slide from './slide.vue'
export default {
  components: {
    Slide,
  },
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    this.gets()
  },
  methods: {
    gets() {
      this.$axios.get('../../src/assets/data/home.json').then(function(res) {
          this.lists = res.data
        }.bind(this))
        .catch(function(err) {

        })
    }
  },
}

</script>
<style scoped>
.home {
  margin-top: 0.9rem;
}
.content ul li{
  padding: 0.106667rem;
  text-align: justify;
}
</style>
