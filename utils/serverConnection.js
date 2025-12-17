import axios from "axios";

// 🔗 Replace with your backend / ngrok URL
const SERVER_URL = "https://nonvasculose-noncorrelative-catrice.ngrok-free.dev";

export const uploadImageToServer = async (base64Image) => {
  try {
    if (!base64Image) {
      throw new Error("No base64 image provided");
    }

    // Add required prefix
    const imagePayload = `data:image/jpeg;base64,${base64Image}`;

    console.log("📤 Sending image base64 length:", imagePayload.length);

    const response = await axios.post(
      `${SERVER_URL}/upload`,
      {
        image: imagePayload,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000,
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "❌ Upload error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
