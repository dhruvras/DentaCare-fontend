import axios from "axios";

const SERVER_URL = "http://192.168.5.25:8000";

export const uploadImageToServer = async (base64Image) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/predict`,
      { image: base64Image },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 20000,
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Upload failed:", error.message);
    throw error;
  }
};
