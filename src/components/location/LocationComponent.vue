<template>
  <div>
    <h1>Location</h1>
    <MapDisplayer />
    <LocationInputter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapDisplayer from "./map/MapDisplayer.vue";
import LocationInputter from "./input/LocationInputter.vue";

export default defineComponent({
  name: "LocationComponent",
  components: {
    MapDisplayer,
    LocationInputter,
  },
});
</script>
