import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { uploadImageToServer } from "../../utils/serverConnection";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [facing, setFacing] = useState<"front" | "back">("back");
  const [uploading, setUploading] = useState(false);

  const cameraRef = useRef<any>(null);

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  // 📸 Capture image
  const takePicture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: true,
      });

      setPhotoUri(photo.uri);
      setPhotoBase64(photo.base64 ?? null);
      setProcessedImage(null); // reset previous result
    } catch (err) {
      console.error("❌ Capture failed", err);
    }
  };

  // 🚀 Send image to backend
  const sendImage = async () => {
    if (!photoBase64) {
      alert("No image captured");
      return;
    }

    try {
      setUploading(true);

      const response = await uploadImageToServer(
        `data:image/jpeg;base64,${photoBase64}`
      );

      console.log("✅ Backend response:", response);

      // ✅ display processed image
      setProcessedImage(response.image);
    } catch (err) {
      console.error("❌ Upload failed", err);
      alert("Processing failed");
    } finally {
      setUploading(false);
    }
  };

  const resetCamera = () => {
    setPhotoUri(null);
    setPhotoBase64(null);
    setProcessedImage(null);
  };

  if (!permission) return <Text>Requesting permissions...</Text>;

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionBtn}
        >
          <Text style={{ color: "#fff" }}>Allow Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
      ) : (
        <Image
          source={{ uri: processedImage ?? photoUri }}
          style={styles.preview}
        />
      )}

      <View style={styles.controls}>
        {!photoUri && (
          <>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() =>
                setFacing(facing === "back" ? "front" : "back")
              }
            >
              <Ionicons name="camera-reverse-outline" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
            >
              <View style={styles.innerCircle} />
            </TouchableOpacity>
          </>
        )}

        {photoUri && (
          <View style={styles.previewActions}>
            <TouchableOpacity
              style={[styles.actionBtn, styles.retake]}
              onPress={resetCamera}
            >
              <Ionicons name="refresh" size={22} color="#fff" />
              <Text style={styles.actionText}>Retake</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionBtn, styles.send]}
              onPress={sendImage}
              disabled={uploading}
            >
              {uploading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Ionicons name="send" size={22} color="#fff" />
                  <Text style={styles.actionText}>Send</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  camera: { flex: 1 },
  preview: { flex: 1 },
  controls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  captureButton: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  previewActions: { flexDirection: "row", gap: 20 },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,
    gap: 8,
  },
  retake: { backgroundColor: "#ff3b30" },
  send: { backgroundColor: "#34c759" },
  actionText: { color: "#fff", fontWeight: "600" },
  iconButton: { padding: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  permissionBtn: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
