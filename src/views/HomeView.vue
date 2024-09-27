<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Button icon="pi pi-home" aria-label="Save" />
    <Button label="Profile" icon="pi pi-user" />
    <Button label="Save" icon="pi pi-check" iconPos="right" />
    <Button label="Search" icon="pi pi-search" iconPos="top" />
    <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Button from "primevue/button";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    Button,
  },
});
</script>
