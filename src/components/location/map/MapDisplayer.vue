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
  // 컴포넌트가 마운트될 때 카카오맵 API 동적으로 로드
  mounted() {
    const mapScript = document.createElement("script");

    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;

    mapScript.onload = () => {
      window.kakao.maps.load(() => {
        this.initMap();
      });
    };

    document.head.appendChild(mapScript);
  },
  methods: {
    initMap() {
      if (!window.kakao || !window.kakao.maps) {
        throw new Error("Kakao Maps API가 로드되지 않았습니다.");
      }
    },
  },
});
</script>
