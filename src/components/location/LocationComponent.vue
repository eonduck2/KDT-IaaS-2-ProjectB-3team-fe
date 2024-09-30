<template>
  <div>
    <h1>Location</h1>
    <LocationInputter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LocationInputter from "./input/LocationInputter.vue";

export default defineComponent({
  name: "LocationComponent",
  components: {
    LocationInputter,
  },
});
</script>
