<template>
  <div>
    <h2>이미지 업로드</h2>
    <input type="file" @change="onFileChange" />
    <button @click="uploadImage">업로드</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { uploadImageToBackend } from '../services/api';

export default {
  data() {
    return {
      selectedFile: null,
      message: ''
    };
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadImage() {
      if (!this.selectedFile) {
        this.message = '이미지를 선택해주세요.';
        return;
      }
      try {
        const response = await uploadImageToBackend(this.selectedFile);
        this.message = response.data.message;  // 백엔드에서 반환된 메시지 처리
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        this.message = '이미지 업로드에 실패했습니다.';
      }
    }
  }
};
</script>
