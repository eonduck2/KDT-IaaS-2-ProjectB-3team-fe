<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ImageUpload />  <!-- 이미지 업로드 컴포넌트 추가 -->
  </div>
</template>

<script>
import ImageUpload from './components/ImageUpload.vue';

export default {
  name: 'App',
  components: {
    ImageUpload
  }
};
</script>
