// src/services/fileUpload.js
const API = import.meta.env.VITE_API;
import { toast } from "react-toastify";

export async function UploadFile(file, formatMessage) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API}/files/`, {
      method: "POST",
      body: formData,
    });

    if (response.status === 201) {
      const data = await response.json();
      return { url: data.url, id: data.id };
    } else {
      throw new Error(formatMessage({ id: "fileUpload.error" }));
    }
  } catch (error) {
    console.error("Upload error:", error);
    toast.error(formatMessage({ id: "fileUpload.error" }));
    throw error;
  }
}