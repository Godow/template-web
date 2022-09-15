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
import layout from "@/components/layout/index.vue";
export default {
  components: {
    layout,
  },
};
</script>
