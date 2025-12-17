import axios from "axios";

const SERVER_URL = "http://192.168.5.25:8000";

export const uploadImageToServer = async (base64Image) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/predict`,
      {
        image: base64Image, // 👈 send base64 directly
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 15000, // ⛑️ prevents infinite loading
      }
    );

    // ✅ Axios auto-parses JSON
    return response.data;
  } catch (error) {
    console.error(
      "❌ Upload failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
