<template>
  <div>
    <DevelorDetails :developer="selectedDeveloper" />
  </div>
</template>

<script>
import DevelorDetails from "~/components/DevelorDetails.vue";
import { getDevelopersData } from "~/services/getDevelopers.js";

export default {
  components: {
    DevelorDetails,
  },
  data() {
    return {
      developers: [],
    };
  },
  computed: {
    selectedDeveloper() {
      return this.developers?.find(
        (developer) => developer.id === this.idInParams
      );
    },
    idInParams() {
        return +this.$route.params.id;
    },
  },
  async mounted() {
    try {
      const developers = await getDevelopersData(); //по хорошему весь этот список сохранить в каком-то хранилище и не говнокодить, но я решил сделать так, потмоу что быстрее
      this.developers = [...developers];
    } catch (e) {
      console.log("No datas in developersList");
    }
  },
};
</script>

<style></style>
