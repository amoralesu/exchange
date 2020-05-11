<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <main>
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center " />
  </main>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PxHeader from "@/components/PxHeader.vue";
// import PxAssetsTable from "@/components/PxAssetsTable.vue";
export default {
  name: "App",
  components: {
    PxHeader,
  },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "ripple" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
