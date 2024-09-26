<template>
  <div
    class="upload-container bg-gray-40 p-6 rounded-lg shadow-md max-w-sm max-h-52 mx-auto flex flex-col items-center mt-96"
  >
    <h2 class="text-xl font-semibold mb-4 text-gray-800">이미지 업로드</h2>
    <input
      type="file"
      @change="onFileChange"
      class="file-input mb-3 p-2 border border-gray-300 rounded-md w-full cursor-pointer"
    />
    <button
      @click="uploadImage"
      class="upload-button bg-green-600 text-white py-2 px-4 rounded-md mt-3 transition duration-300 hover:bg-green-700"
    >
      업로드
    </button>
    <p v-if="message" class="upload-message mt-4 text-sm text-red-500">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { uploadImageToBackend } from "../services/api";

export default defineComponent({
  data() {
    return {
      selectedFile: null as File | null, // 파일 타입 명시
      message: "" as string, // 문자열 타입 명시
    };
  },
  methods: {
    onFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.selectedFile = target.files ? target.files[0] : null; // 파일 선택 처리
    },
    async uploadImage() {
      if (!this.selectedFile) {
        this.message = "이미지를 선택해주세요.";
        return;
      }
      try {
        const response = await uploadImageToBackend(this.selectedFile);
        this.message = response.data.message; // 백엔드에서 반환된 메시지 처리
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        this.message = "이미지 업로드에 실패했습니다.";
      }
    },
  },
});
</script>

<!-- <style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  max-height: 200px;
  margin-top: 30%;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #333;
}

.file-input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

.upload-button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.upload-button:hover {
  background-color: #218838;
}

.upload-message {
  margin-top: 15px;
  font-size: 0.9em;
  color: #d9534f;
}
</style> -->
