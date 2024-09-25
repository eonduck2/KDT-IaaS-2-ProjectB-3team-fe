import axios from 'axios';

const API_URL = 'http://localhost:5000/api/upload';  // Flask 백엔드의 엔드포인트

export const uploadImageToBackend = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
