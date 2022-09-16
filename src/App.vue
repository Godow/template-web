<template>
  <layout>
    <template v-slot:header> Hello Template </template>

    <template v-slot:body> <router-view></router-view> </template>

    <template v-slot:footer>
      <router-link to="/">HomeView</router-link>
      <br />
      <router-link to="/about">AboutView</router-link>
    </template>
  </layout>
</template>

<script>
import layout from "comp/layout/index.vue";
import axios from "axios";
export default {
  components: {
    layout,
  },
  mounted() {
    axios
      .get("/api/get")
      .then(res => {
        console.log("get data:", res.data);
      })
      .catch(e => {
        console.log("error:", e);
      });
  },
};
</script>
