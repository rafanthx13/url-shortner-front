<template>
  <h1 style="text-align: center; font-weight: lighter;">
    Oops, it looks like the page you're looking for doesn't exist.
  </h1>
  <router-link to="/" class="row justify-center" style="text-decoration: none;">
    <q-btn color="primary" label="Home" class="text-h5 text-center" rounded></q-btn>
  </router-link>

  <q-inner-loading :showing="visible" class="relative-position" style="background-color: white;">
    <q-spinner-gears size="400px" color="primary" style="background-color: white;" />
  </q-inner-loading>

</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      visible: true,
    }
  },

  created(){
    setTimeout(() => this.visible = false, 3000);
  },

}
</script>
