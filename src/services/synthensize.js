// src/services/synthesize.js
import apiCall from "./apiConfig";
import { toast } from "react-toastify";

export async function generateImage(data, formatMessage) {
  try {
    const response = await apiCall("/models/", "POST", data);
    return response; // Expecting { image_url: "string" }
  } catch (error) {
    console.error("Generate image error:", error);
    toast.error(formatMessage({ id: "generateImage.error" }));
    throw error;
  }
}