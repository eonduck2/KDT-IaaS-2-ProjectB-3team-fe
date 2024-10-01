<template>
  <div>
    <h3>Map</h3>
    <div id="map" class="bg-black w-[800px] h-[600px]"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MapDisplayer",
  mounted() {
    const mapScript = document.createElement("script");

    document.head.appendChild(mapScript);
  },
});
</script>
