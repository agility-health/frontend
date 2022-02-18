<template>
  <div>
    <h1>Home</h1>
    <h3>{{userStatus}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed:{
    userStatus(){
      return this.$store.state.auth.status
    }
  }
}

</script>