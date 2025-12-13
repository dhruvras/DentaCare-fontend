import axios from 'axios';

const uploadBase64Image = async (base64Image) => {
  try {
    const response = await axios.post('http://10.34.158.125:8000/upload-base64', {
      image: base64Image,
    });
    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export { uploadBase64Image };
