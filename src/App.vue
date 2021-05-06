<template>
  <v-main>
    <ChallengeVue />
  </v-main>
</template>

<script>
import ChallengeVue from "./components/Challenge.vue";

export default {
  name: "App",

  components: {
    ChallengeVue,
  },

  data: () => ({
    //
  }),
};
</script>
