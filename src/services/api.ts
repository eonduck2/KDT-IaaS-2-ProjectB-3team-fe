import type { TUploadResponse } from "@/types/services/api.type";
import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:5000/api/upload";

export const uploadImageToBackend = async (
  file: File
): Promise<AxiosResponse<TUploadResponse>> => {
  const formData = new FormData();
  formData.append("file", file);

  return await axios.post<TUploadResponse>(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
